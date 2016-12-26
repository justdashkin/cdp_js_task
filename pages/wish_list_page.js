var wish_list_page = function () {
    this.productCode = function () {
        return element(by.xpath("//span[@data-test='wishlist-item-75159-code']"));
    };
};

module.exports = new wish_list_page();