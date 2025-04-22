const { Builder, By, until } = require("selenium-webdriver");
const { expect } = require("chai");
const fs = require("fs");

describe("Search Functionality", function () {
  this.timeout(60000); 

  let driver;

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async () => {
    await driver.quit();
  });

  it("find a user using search", async () => {
    try {
      console.log("Navigating to website...");
      await driver.get("https://jsonplaceholder-app-peach.vercel.app/");

      console.log("Waiting for login form...");
      await driver.wait(until.elementLocated(By.className("login-box")), 15000);

      console.log("Entering login credentials...");
      await driver.findElement(By.css('input[type="email"]')).sendKeys("test@example.com");
      await driver.findElement(By.css('input[type="password"]')).sendKeys("password123");
      await driver.findElement(By.className("login-btn")).click();

      console.log("Waiting for home page...");
      await driver.wait(until.urlContains("/home"), 15000);

      console.log("Navigating to 'Users' page...");
      await driver.findElement(By.linkText("Users")).click();

      console.log("Waiting for Users page to load...");
      await driver.wait(until.urlContains("/users"), 15000);

      console.log("Typing in search field...");
      const searchInput = await driver.wait(until.elementLocated(By.css('input[type="text"]')), 10000);
      await searchInput.sendKeys("Kurtis");

      console.log("Waiting for search results...");
      const result = await driver.wait(
        until.elementLocated(By.xpath("//*[contains(text(), 'Kurtis')]")),
        10000
      );

      console.log("Checking result...");
      const resultText = await result.getText();
      expect(resultText).to.include("Kurtis");
      console.log("Search functionality works! User found.");
    } catch (err) {
      const screenshot = await driver.takeScreenshot();
      fs.writeFileSync("search_test.png", screenshot, "base64");
      console.error("Test failed. Screenshot saved.");
      throw err; 
    }
  });
});
