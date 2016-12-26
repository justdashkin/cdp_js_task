var current_product_page = function () {
    this.cartButton = function(){
         return element(by.xpath("//a[@data-event-prefix='shopcheckprice']"));
    };

    this.addToCartButton = function () {
      return element(by.xpath("//div[@class='overview__pickers']//button[@class='add-to-cart-button']"));
    };

    this.addToWishListButton = function () {
      return element(by.xpath("//button[@class='add-to-wishlist-button']"));
    };

    this.productName = function () {
      return element(by.xpath("//h1[@class='overview__name']"));
    };

   this.clickOnCartIcon = function(){
		   browser.sleep(5000);
            this.cartButton().click();
    };

   this.clickAddToCartButton = function () {
     browser.sleep(5000);
     this.addToCartButton().click();
   };

   this.clickAddToWishListButton =function () {
	  browser.sleep(5000);
      this.addToWishListButton().click();
   };
   
   this.dropdownCartButton = function () {
        return element(by.xpath("//div[@id='util-bar-dropdown-cart']"));
    };
    this.wishListButton = function () {
        return element(by.xpath("//a[@class='util-bar__link-wishlist']"));
    };
    this.clickOnCartButton = function () {
		browser.sleep(5000);
        this.dropdownCartButton().click();
    };
    this.clickOnWishListButton = function () {
	   browser.sleep(5000);
        this.wishListButton().click();
    };
	 this.productCode = function () {
        return element(by.xpath("//span[@data-test='item-product-code']"));
    }
	
	   this.continueButton = function () {
        return element(by.xpath("//a[text()='CONTINUE']"));
    };

    this.clickOnContinueButton = function () {
		browser.sleep(5000);
        this.continueButton().click();
    };
};

module.exports = new current_product_page();
