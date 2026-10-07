/* eslint-disable @typescript-eslint/no-require-imports -- Node CommonJS test harness. */
// Offline regression tests: no database, email or webhook connections are made.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
function load(file, mocks = {}) {
  const filename = path.resolve(root, file);
  const output = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {compilerOptions: {module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
  const loadedModule = {exports:{}};
  const localRequire = name => {
    if (name in mocks) return mocks[name];
    if (name.startsWith('@/')) return load(`src/${name.slice(2)}.ts`, mocks);
    if (name.startsWith('.')) return load(path.resolve(path.dirname(filename), `${name}.ts`), mocks);
    return require(name);
  };
  new Function('require','module','exports', output)(localRequire,loadedModule,loadedModule.exports);
  return loadedModule.exports;
}
const {LeadSchema} = load('src/lib/leads/schema.ts');
const {OFFERINGS,resolveOffering} = load('src/lib/leads/offerings.ts');
const {calculateLeadScore} = load('src/lib/leads/score.ts');
const valid = {name:'Test Person',email:'test@example.com',projectType:'Custom AI / GenAI',problem:'Evaluate our document workflow.',budget:'Not sure yet',timeline:'Not sure yet',context:'custom-ai'};
test('every visible offering validates and receives its configured score',()=>{
  for (const offering of OFFERINGS) {
    const lead={...valid,projectType:offering.value};
    assert.equal(LeadSchema.safeParse(lead).success,true);
    assert.equal(calculateLeadScore(lead).breakdown.projectType,offering.score);
  }
  assert.equal(LeadSchema.safeParse({...valid,projectType:'unknown'}).success,false);
  assert.equal(resolveOffering('custom-ai'),'Custom AI / GenAI');
  assert.equal(resolveOffering('enterprise-software'),'Enterprise Software');
});
function route({failSave=false,failNotify=false}={}) {
  let notifications=0; let saved;
  const mocks={
    '@/lib/leads/rate-limit':{verifyRateLimit:async()=>({success:true})},
    '@/lib/prisma':{prisma:{lead:{create:async({data})=>{if(failSave)throw Error('Simulated outage');saved=data;return{id:'saved-test-receipt'};},update:async()=>({})},auditLog:{create:async()=>({})}}},
    '@/lib/leads/notify':{sendLeadNotifications:async()=>{notifications++;if(failNotify)throw Error('Simulated notification failure');return{discord:false,email:false};}},
  };
  return {...load('src/app/api/leads/route.ts',mocks),notifications:()=>notifications,saved:()=>saved};
}
const request = body => new Request('http://localhost/api/leads',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)});
test('storage outage returns retryable failure, never a fabricated receipt',async()=>{
  const api=route({failSave:true});const response=await api.POST(request(valid));
  assert.equal(response.status,503);assert.equal((await response.json()).ok,false);
  assert.equal(response.headers.get('set-cookie'),null);assert.equal(api.notifications(),0);
});
test('saved inquiry returns real reference and essential confirmation cookie',async()=>{
  const api=route();const response=await api.POST(request(valid));const result=await response.json();
  assert.equal(response.status,200);assert.equal(result.id,'saved-test-receipt');
  assert.match(response.headers.get('set-cookie'),/atc-inquiry-receipt=saved-test-receipt/);
  assert.match(response.headers.get('set-cookie'),/HttpOnly/);
  assert.match(api.saved().problem,/Context: custom-ai/);
});
test('notification failure does not ask users to submit a saved inquiry twice',async()=>{
  const api=route({failNotify:true});const response=await api.POST(request(valid));
  assert.equal(response.status,200);assert.equal((await response.json()).ok,true);
});
test('invalid inquiry is rejected before save or notification',async()=>{
  const api=route();const response=await api.POST(request({...valid,email:'invalid'}));
  assert.equal(response.status,400);assert.equal(api.saved(),undefined);assert.equal(api.notifications(),0);
});
test('primary action foreground has at least 4.5:1 contrast',()=>{
  const luminance=hex=>{const rgb=hex.match(/../g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;};
  assert.ok(1.05/(luminance('126647')+.05)>=4.5);
});
