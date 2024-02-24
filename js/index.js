$(document).ready(function(){

    $.ajax({
        url:"http://localhost:8080/product/new",
        method:"get"
    }).done(function(result){
        console.log("kiểm tra ",result.data)

       

        var productnew = result.data;
        var html=""
        var html1=""
        for(var i = 0; i < 3; i++){
            html +=`<div class="col-md-4 product-men">
            <div class="men-pro-item simpleCart_shelfItem">
                <div class="men-thumb-item text-center">
                    <img src="${productnew[i].images}" alt="" class="img-fluid">
                    <span class="product-new-top">New</span>
                    <div class="men-cart-pro">
                        <div class="inner-men-cart-pro">
                            <a href="single.html" class="link-product-add-cart">Quick View</a>
                        </div>
                    </div>
                </div>
                <div class="item-info-product text-center mt-2">
                    <h4 class="pt-1">
                        <a href="single.html">${productnew[i].title}</a>
                    </h4>
                    <div class="info-product-price">
                        <span class="item_price">${productnew[i].price}.000 VNĐ</span>
                        
                    </div>
                    <div
                        class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                            <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input type="hidden" name="business" value=" " />
                                <input type="hidden" name="item_name" value="Panasonic Tab 8" />
                                <input type="hidden" name="amount" value="499.00" />
                                <input type="hidden" name="discount_amount" value="1.00" />
                                <input type="hidden" name="currency_code" value="USD" />
                                <input type="hidden" name="return" value=" " />
                                <input type="hidden" name="cancel_return" value=" " />
                                <input type="submit" name="submit" value="Add to cart"
                                    class="btn btn-style btn-style-secondary mt-3" />
                            </fieldset>
                        </form>
                    </div>

                </div>
            </div>
        </div>`
        }
        

        for(var i = 3; i < 6; i++){
            html +=`<div class="col-md-4 product-men">
            <div class="men-pro-item simpleCart_shelfItem">
                <div class="men-thumb-item text-center">
                    <img src="${productnew[i].images}" alt="" class="img-fluid">
                    <span class="product-new-top">New</span>
                    <div class="men-cart-pro">
                        <div class="inner-men-cart-pro">
                            <a href="single.html" class="link-product-add-cart">Quick View</a>
                        </div>
                    </div>
                </div>
                <div class="item-info-product text-center mt-2">
                    <h4 class="pt-1">
                        <a href="single.html">${productnew[i].title}</a>
                    </h4>
                    <div class="info-product-price">
                        <span class="item_price">${productnew[i].price}.000 VNĐ</span>
                        
                    </div>
                    <div
                        class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                            <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input type="hidden" name="business" value=" " />
                                <input type="hidden" name="item_name" value="Panasonic Tab 8" />
                                <input type="hidden" name="amount" value="499.00" />
                                <input type="hidden" name="discount_amount" value="1.00" />
                                <input type="hidden" name="currency_code" value="USD" />
                                <input type="hidden" name="return" value=" " />
                                <input type="hidden" name="cancel_return" value=" " />
                                <input type="submit" name="submit" value="Add to cart"
                                    class="btn btn-style btn-style-secondary mt-3" />
                            </fieldset>
                        </form>
                    </div>

                </div>
            </div>
        </div>`       

        }
        for(var i = 6; i < 9; i++){
            html1 +=`<div class="col-md-4 product-men">
            <div class="men-pro-item simpleCart_shelfItem">
                <div class="men-thumb-item text-center">
                    <img src="${productnew[i].images}" alt="" class="img-fluid">
                    <span class="product-new-top">New</span>
                    
                    <div class="men-cart-pro">
                        <div class="inner-men-cart-pro">
                            <a href="single.html" class="link-product-add-cart">Quick View</a>
                        </div>
                    </div>
                </div>
                <div class="item-info-product text-center mt-2">
                    <h4 class="pt-1">
                        <a href="single.html">${productnew[i].title}</a>
                    </h4>
                    <div class="info-product-price">
                        <span class="item_price">${productnew[i].price}.000 VNĐ</span>
                        
                    </div>
                    <div
                        class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                            <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input type="hidden" name="business" value=" " />
                                <input type="hidden" name="item_name" value="Panasonic Tab 8" />
                                <input type="hidden" name="amount" value="499.00" />
                                <input type="hidden" name="discount_amount" value="1.00" />
                                <input type="hidden" name="currency_code" value="USD" />
                                <input type="hidden" name="return" value=" " />
                                <input type="hidden" name="cancel_return" value=" " />
                                <input type="submit" name="submit" value="Add to cart"
                                    class="btn btn-style btn-style-secondary mt-3" />
                            </fieldset>
                        </form>
                    </div>

                </div>
            </div>
        </div>`       

        }
        $('.productnew').append(html);
        $('.productnew3').append(html1);
    })
})