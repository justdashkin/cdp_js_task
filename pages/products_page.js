var products_page = function () {
    this.productCategoriesPageHeaderText = "Products";
	
    this.theme = function () {
        return element(by.xpath("//a[contains(@href,'StarWars')]"));
    };

    this.chooseTheme = function () {
		browser.sleep(5000);
        this.theme().click();
    };
};

module.exports = new products_page();