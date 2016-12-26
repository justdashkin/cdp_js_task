var themed_page = function () {
    this.productMenuItem = function () {
        return element(by.xpath("//div[@class='grid-column']//nav[@role='navigation']//a[contains(@href,'products')]"));
    };

    this.clickOnProductMenuItem = function () {
        this.productMenuItem().click();
    };
};
module.exports = new themed_page();