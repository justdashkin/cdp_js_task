var lego_home_page = require("../pages/lego_home_page");
var products_page = require("../pages/products_page");
var themed_page = require("../pages/themed_page");
var themed_products_page = require("../pages/themed_products_page");
var current_product_page = require("../pages/current_product_page");
var wish_list_page = require("../pages/wish_list_page");

describe("LEGO_TEST_2: Adding to wish list", function () {
    it("I verify that product added to wish list", function () {
		lego_home_page.openHomePage();
		lego_home_page.clickOnProductButton();
		products_page.chooseTheme();
		themed_page.clickOnProductMenuItem();
		themed_products_page.clickOnConcreteProduct();
		current_product_page.clickOnCartIcon();
		current_product_page.clickOnContinueButton();
		browser.ignoreSynchronization = true;
		current_product_page.clickAddToWishListButton();
		current_product_page.clickOnWishListButton();
		browser.sleep(3000);
		expect(wish_list_page.productCode().getText()).toBe(themed_products_page.concreteProductIdText);
        });
    });