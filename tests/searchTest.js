const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Search Functionality Automation", function () {
  this.timeout(10000); 

  let driver;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async function () {
    await driver.quit();
  });

  it("should search and display correct results", async function () {
    this.timeout(30000); 
    
    await driver.get("https://yourwebsite.com"); 
    await driver.findElement(By.name("search")).sendKeys("query", Key.RETURN);
    
    const result = await driver.findElement(By.id("result"));
    const text = await result.getText();
  
    assert.strictEqual(text, "Expected result");
  });
  
