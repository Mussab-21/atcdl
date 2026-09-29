import { prisma } from "../src/lib/prisma";

async function main() {
  const leads = await prisma.lead.findMany();
  console.log("=== PERSISTED LEADS IN DB ===");
  console.log(JSON.stringify(leads, null, 2));

  const logs = await prisma.auditLog.findMany();
  console.log("=== AUDIT LOGS IN DB ===");
  console.log(JSON.stringify(logs, null, 2));
}

main().finally(async () => {
  await prisma.$disconnect();
});
