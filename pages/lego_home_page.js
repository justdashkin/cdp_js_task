var lego_home_page=function () {
    this.legoHomePageUrl = "https://www.lego.com/en-us";
	browser.driver.manage().window().maximize();

    this.productButton = function () {
        return element(by.xpath("//a[contains(@class,'gn-icon-products')]"));
    };
    this.openHomePage = function () {
      browser.get(this.legoHomePageUrl);
        browser.waitForAngular();
    };
    this.clickOnProductButton = function () {
      this.productButton().click();
    };
};

module.exports = new lego_home_page();