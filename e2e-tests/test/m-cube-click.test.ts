import { takeAndCompareScreenshot } from "./testing-utils";

describe("m-cube", () => {
  test("visible and clickable", async () => {
    const page = await globalThis.__BROWSER_GLOBAL__.newPage();

    await page.setViewport({ width: 1024, height: 1024 });

    await page.goto("http://localhost:8079/m-cube-test.html/reset");

    await page.waitForSelector("m-cube[color='red']");

    await takeAndCompareScreenshot(page);

    await page.click("canvas", { offset: { x: 512, y: 640 } });
    await page.waitForSelector("m-cube[color='green']");

    await takeAndCompareScreenshot(page);

    await page.close();
  }, 60000);
});
