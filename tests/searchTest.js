const { Builder, By, until } = require("selenium-webdriver");
const fs = require("fs");

async function testSearchFunctionality() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    console.log("Navigating to website...");
    await driver.get("https://jsonplaceholder-app-peach.vercel.app/");

    console.log("Waiting for login form...");
    await driver.wait(until.elementLocated(By.className("login-box")), 15000);

    console.log("Entering login credentials...");
    let emailField = await driver.findElement(By.css('input[type="email"]'));
    await emailField.sendKeys("test@example.com");

    let passwordField = await driver.findElement(By.css('input[type="password"]'));
    await passwordField.sendKeys("password123");

    let loginButton = await driver.findElement(By.className("login-btn"));
    await loginButton.click();

    console.log("Waiting for home page...");
    await driver.wait(until.urlContains("/home"), 15000);

    console.log("Navigating to 'Users' page...");
    let usersLink = await driver.findElement(By.linkText("Users"));
    await usersLink.click();

    console.log("Waiting for Users page to load...");
    await driver.wait(until.urlContains("/users"), 15000);

    console.log("Waiting for search input...");
    let searchInput = await driver.wait(until.elementLocated(By.css('input[type="text"]')), 10000);

    console.log("Typing in search field...");
    await searchInput.sendKeys("Kurtis");

    console.log("Waiting for search results...");
    await driver.wait(async () => {
      let results = await driver.findElements(By.css("div")); 
      return results.length > 1;
    }, 15000);

    console.log("Checking search result text...");
    let result = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Kurtis')]")), 10000);

    if (result) {
      console.log("✅ Search functionality works! User found.");
    } else {
      throw new Error("❌ Search result not displayed.");
    }

  } catch (error) {
    console.error("Test failed:", error);

    // Capture screenshot on failure
    let screenshot = await driver.takeScreenshot();
    fs.writeFileSync("search_test.png", screenshot, "base64");
    console.log("📸 Screenshot saved as 'search_test.png' for debugging.");
  } finally {
    console.log("Closing the browser...");
    await driver.quit();
  }
}

testSearchFunctionality();
