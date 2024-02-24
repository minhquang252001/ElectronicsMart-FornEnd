
$(document).ready(function (){
    var cartData = localStorage.getItem("giohang");
    if(cartData){
        var arrayCart = JSON.parse(cartData);
        for (var i = 0; i < arrayCart.length; i++) {
            var id = arrayCart[i].id;

          }
    }
    $.ajax({
        url:'http://localhost:8080/product/id',
        method:'get',
        data:{id : id}
    }).done(function(result){
        var singleId = result.data;
        var jsonSingle = JSON.stringify(singleId);
        var single = `<div class="row">
    <div class="col-lg-5 col-md-8 single-right-left ">
    
        <div class="grid images_3_of_2">
            <div class="flexslider">
                <ul class="slides">
                <img src="${singleId.images}" class="img-fluid" alt="">
                </ul>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>

    <div class="col-lg-7 single-right-left simpleCart_shelfItem">
        <h3 class="mb-3">${singleId.title}</h3>
        <p class="mb-3">
            <span class="item_price">${singleId.price}.000VNĐ</span>
            
            <label>Free delivery</label>
        </p>
        <div class="single-infoagile">
            <ul>
                <li class="mb-3">
                    Cash on Delivery Eligible.
                </li>
                <li class="mb-3">
                    Shipping Speed to Delivery.
                </li>
                <li class="mb-3">
                    EMIs from $100/month.
                </li>
                <li class="mb-3">
                    Bank Offer Extra 5% off* with Axis Bank Buzz Credit Card
                </li>
            </ul>
        </div>
        <div class="product-single-w3l">
            <p class="my-3">
                <i class="far fa-hand-point-right mr-2"></i>
                1 Year Manufacturer Warranty
                <ul>
                    <li class="mb-1">
                        Handset, Power Adapter, USB Type-C Cable, SIM Eject Tool, Simple Protective Cover,
                        Warranty Card, User Guide
                    </li>
                    <li class="mb-1">
                        Full HD+ IPS Display
                    </li>
                    <li class="mb-1">
                        13MP Rear Camera | 8MP Front Camera
                    </li>
                    <li class="mb-1">
                        5020 mAh
                    </li>
                    <li class="mb-1">
                        2340 x 1080 Pixels
                    </li>
                </ul>
                <p class="my-sm-4 my-3">
                    <i class="far fa-hand-point-right mr-2"></i>Net banking & Credit/ Debit/ ATM card
                </p>
        </div>
        <a href="#" class="btn btn-style btn-single" json='${jsonSingle}'>Add to cart</a>
    </div>
</div>`
        $(".singleid").append(single);
        $('body').on("click",".btn-single",function(){
            var dataJson = $(this).attr('json')
            
            var arrayCart = [];
            var cartData = localStorage.getItem("giohang");

            if (cartData == undefined || cartData == null || cartData == "") {
                arrayCart.push(JSON.parse(dataJson));
                localStorage.setItem("giohang", JSON.stringify(arrayCart));
                console.log("Thêm mới vào giỏ hàng", arrayCart);
            } else {
                var arrayCart = JSON.parse(cartData);
                var duplicateIndex = -1;

                for (var i = 0; i < arrayCart.length; i++) {
                    if (arrayCart[i].id === JSON.parse(dataJson).id) {
                        duplicateIndex = i;
                        break;
                    }
                }

                    if (duplicateIndex !== -1) {
                        // Đối tượng đã tồn tại, tăng giá trị quanlity lên 1
                        arrayCart[duplicateIndex].quanlity = (arrayCart[duplicateIndex].quanlity || 0) + 1;
                       
                       
                    } else {
                        // Đối tượng chưa tồn tại, thêm mới vào giỏ hàng
                        var newCartItem = JSON.parse(dataJson);
                        newCartItem.quanlity = 1;
                        arrayCart.push(newCartItem);
                        console.log("Thêm mới vào giỏ hàng", arrayCart);
                    } 
                    if (arrayCart[duplicateIndex].quanlity > 1) {
                        arrayCart[duplicateIndex].price = arrayCart[duplicateIndex].price * arrayCart[duplicateIndex].quanlity;
                    }
                    localStorage.setItem("giohang", JSON.stringify(arrayCart));
                    console.log("Tổng giá:", arrayCart);
                }
                alert("Đã Thêm vào giỏ hàng")
        })
    })
})
