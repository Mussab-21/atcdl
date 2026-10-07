import { chromium } from "playwright";
import path from "path";

async function runBrowserTest() {
  console.log("=== LAUNCHING REAL BROWSER LEAD TEST ===");

  const browser = await chromium.launch({
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    headless: false, // Run with UI so Turnstile challenge completes naturally
    args: ["--disable-blink-features=AutomationControlled"],
  });

  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0",
  });

  await context.addInitScript(() => {
    Object.defineProperty(navigator, "webdriver", {
      get: () => undefined,
    });
  });

  const page = await context.newPage();

  page.on("console", (msg) => {
    console.log(`[Browser Console] ${msg.type()}: ${msg.text()}`);
  });

  try {
    console.log("Navigating to http://localhost:3000/contact ...");
    await page.goto("http://localhost:3000/contact", { waitUntil: "networkidle" });

    // STEP 1
    console.log("Filling Step 1...");
    await page.fill(
      "textarea",
      "We need an enterprise document intelligence and private knowledge copilot pipeline to parse 25,000 regulatory compliance contracts and technical manuals across our defense engineering facilities with strict RBAC citation verification and zero model training leakage."
    );
    await page.fill(
      'input[placeholder*="tech stack"]',
      "AWS GovCloud, PostgreSQL 16, and Microsoft SharePoint"
    );

    await page.click('button:has-text("Continue to Budget & Timeline")');
    await page.waitForTimeout(500);

    // STEP 2
    console.log("Filling Step 2...");
    const selects = await page.$$("select");
    if (selects.length >= 2) {
      await selects[0].selectOption({ index: 0 }); // $100K+
      await selects[1].selectOption({ index: 0 }); // < 1 month
    }

    await page.click('button:has-text("Continue to Contact")');
    await page.waitForTimeout(1000);

    // STEP 3
    console.log("Filling Step 3...");
    await page.fill('input[placeholder*="Alex Mercer"]', "Marcus Vance");
    await page.fill('input[type="email"]', "marcus.vance@solaris-defense.com");
    await page.fill('input[placeholder*="Acme Logistics"]', "Solaris Aerospace & Defense");

    console.log("Locating Turnstile widget and bringing fully into view...");
    const submitBtn = page.locator('button[type="submit"]');
    await submitBtn.waitFor({ state: "visible", timeout: 15000 });
    await submitBtn.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    console.log("Getting exact Turnstile widget position...");
    await page.waitForTimeout(1000);

    const targetPos = await page.evaluate(() => {
      // Find the Turnstile response input's parent or iframe
      const container = document.querySelector('div[class*="min-h-[65px]"]');
      if (!container) return null;
      const rect = container.getBoundingClientRect();

      // Check if there is an iframe or widget inside
      const widget = container.firstElementChild || container;
      const wRect = widget.getBoundingClientRect();

      // Checkbox is at widget left + 28, and vertically centered
      // Center of container horizontally
      const centerWidgetX = rect.left + rect.width / 2;
      const x = centerWidgetX - 150 + 26;
      const y = rect.top + rect.height / 2;

      // Draw a visible red marker on the screen at click target
      const dot = document.createElement("div");
      dot.style.position = "fixed";
      dot.style.left = `${x - 5}px`;
      dot.style.top = `${y - 5}px`;
      dot.style.width = "10px";
      dot.style.height = "10px";
      dot.style.borderRadius = "50%";
      dot.style.backgroundColor = "red";
      dot.style.zIndex = "999999";
      dot.style.pointerEvents = "none";
      document.body.appendChild(dot);

      return { x, y, rect, wRect };
    });

    console.log("Target Position with visual marker:", targetPos);

    if (targetPos) {
      console.log(`Executing human-like curved mouse movement to (${targetPos.x}, ${targetPos.y})...`);
      
      // Start from a realistic initial cursor position
      const currX = 200 + Math.random() * 100;
      const currY = 200 + Math.random() * 100;
      await page.mouse.move(currX, currY);
      await page.waitForTimeout(300);

      // Bezier curve control point
      const ctrlX = (currX + targetPos.x) / 2 + (Math.random() - 0.5) * 80;
      const ctrlY = (currY + targetPos.y) / 2 + (Math.random() - 0.5) * 60;
      const steps = 45;

      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        const x = (1 - t) * (1 - t) * currX + 2 * (1 - t) * t * ctrlX + t * t * targetPos.x;
        const y = (1 - t) * (1 - t) * currY + 2 * (1 - t) * t * ctrlY + t * t * targetPos.y;
        await page.mouse.move(x, y);
        await page.waitForTimeout(10 + Math.floor(Math.random() * 15));
      }

      // Small jitter at target
      await page.waitForTimeout(400);
      await page.mouse.down();
      await page.waitForTimeout(110 + Math.floor(Math.random() * 50));
      await page.mouse.up();
      console.log("✓ Human click executed at Turnstile checkbox");

      await page.waitForTimeout(1000);
      await page.screenshot({ path: "./scripts/click-snapshot.png" });
    }

    console.log("Waiting for Turnstile response token (up to 40s)...");
    // Wait for the hidden input or token state
    await page.waitForFunction(
      () => {
        const input = document.querySelector('input[name="cf-turnstile-response"]') as HTMLInputElement | null;
        return input && input.value && input.value.length > 20;
      },
      { timeout: 40000 }
    );

    const tokenVal = await page.evaluate(() => {
      const input = document.querySelector('input[name="cf-turnstile-response"]') as HTMLInputElement | null;
      return input?.value;
    });
    console.log(`✓ Turnstile token acquired: ${tokenVal?.substring(0, 30)}...`);

    // Click submit
    console.log("Clicking 'Submit Project Brief'...");
    await page.click('button[type="submit"]');

    // Wait for thank-you page navigation
    console.log("Waiting for navigation to thank-you page...");
    await page.waitForURL("**/contact/thank-you*", { timeout: 15000 });

    const finalUrl = page.url();
    console.log(`✓ Navigated successfully to: ${finalUrl}`);

    const refText = await page.textContent("code");
    console.log(`✓ Generated Reference ID: "${refText?.trim()}"`);

    // Capture screenshot
    const screenshotPath = path.resolve("./scripts/thank-you-proof.png");
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`✓ Screenshot saved to: ${screenshotPath}`);

    return { success: true, url: finalUrl, ref: refText?.trim() };
  } catch (error) {
    console.error("Browser test error:", error);
    const errPath = path.resolve("./scripts/browser-error.png");
    await page.screenshot({ path: errPath });
    throw error;
  } finally {
    await browser.close();
  }
}

runBrowserTest()
  .then((res) => {
    console.log("TEST FINISHED WITH RESULT:", res);
    process.exit(0);
  })
  .catch((err) => {
    console.error("TEST FAILED:", err);
    process.exit(1);
  });
