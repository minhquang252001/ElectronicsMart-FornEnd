
$(document).ready(function () {

    $.ajax({
        url: "http://localhost:8080/product",
        method: "get",

    }).done(function (result) {
        console.log(" kết quả trả về", result)
        var listproduct = result.data;
        var html = ""
        for (var i = 0; i < listproduct.length; i++) {
          var jsonProduct = JSON.stringify(listproduct[i]);

            html += `<div class="col-md-4 product-men " category="${listproduct[i].idCategory}">
            <div class="men-pro-item simpleCart_shelfItem">
                <div class="men-thumb-item text-center">
                    <img src="${listproduct[i].images}" alt="" class="img-fluid" >
                    
                    <span class="product-new-top">New</span>
            
                </div>
                <div class="item-info-product text-center mt-2">
                    <h4 class="pt-1">
                        <a href="single.html">${listproduct[i].title}</a>
                    </h4>
                    <div class="info-product-price">
                        <span class="item_price">${listproduct[i].price}.000</span>
                        
                        
                    </div>
                    
                </div>
                    <div class="item-info-product text-center mt-2">
                        <a href="single.html" class="btn-cart link-product-add-cart" json-data='${jsonProduct}'>Add to cart</a>
                    </div>
                
            </div>
            
            </div>`
        }
        $(".productall").append(html);

        $(".filter-button").click(function () {
            var filterValue = $(this).attr("data-filter");
        
            // Ẩn tất cả các sản phẩm
            $(".product-men").hide();
        
            // Hiển thị sản phẩm tương ứng với danh mục được chọn
            if (filterValue === "*") {
              $(".product-men").show();
            } else {
              $(".product-men[category='" + filterValue + "']").show();
            }
          });


          $(".filter-button1").click(function () {
            // Lấy giá trị của nút được click
            var buttonValue = $(this).text();
        
            // Ẩn tất cả các sản phẩm
            $(".product-men").hide();
        
            // Hiển thị sản phẩm theo giá trị của nút được click
            $(".product-men .item_price").each(function () {
              var price = parseInt($(this).text());
        
              if (buttonValue === "Under 200.000VND" && price < 200) {
                $(this).parents(".product-men").show();
              } else if (
                buttonValue === "200.000VND - 300.000VND" &&
                price >= 200 &&
                price <= 300
              ) {
                $(this).parents(".product-men").show();
              } else if (
                buttonValue === "300.000VND - 500.000VND" &&
                price >= 300 &&
                price <= 500
              ) {
                $(this).parents(".product-men").show();
              } else if (
                buttonValue === "500.000VND - 700.000VND" &&
                price >= 500 &&
                price <= 700
              ) {
                $(this).parents(".product-men").show();
              } else if (
                buttonValue === "700.000VND - 1TrVND" &&
                price >= 700 &&
                price <= 1000
              ) {
                $(this).parents(".product-men").show();
              } else if (buttonValue === "Over 1TrVND" && price > 1000) {
                $(this).parents(".product-men").show();
              }
            });
          });
          
          $('body').on("click",".btn-cart",function(){
            var dataJson = $(this).attr('json-data')
            
            var arrayCart = []
            var cartData = localStorage.getItem("giohang");

            if(cartData == undefined || cartData == null || cartData == ""){
              arrayCart.push(JSON.parse(dataJson))
              localStorage.setItem("giohang",JSON.stringify(arrayCart))
              console.log("Kiểm tra không tại thêm mới  ", arrayCart)
            }else{
              var arrayCart = JSON.parse(cartData) 
              var dulicate = false;
              for(var i = 0; i< arrayCart.length;i++){
                if(arrayCart[i].id === JSON.parse(dataJson).id){
                  dulicate = true;
                  break;
                }
              }
                if(!dulicate){
                  arrayCart.push(JSON.parse(dataJson))
                  localStorage.setItem("giohang",JSON.stringify(arrayCart))
                  console.log("Kiểm tra tôn tại ",arrayCart)
                }else{
                  console.log("Đối tượng đã tồn tại trong giohang")
                }
            }
            
          })
          
    })
    var loca = localStorage.getItem("giohang")
    if(loca){
      var local = JSON.parse(loca)
      var cartItemCount = local.length;
    }else{
      var cartItemCount = 0;
    }
  
  var giohangs = `<a href="checkout.html"><i class="far fa-heart"></i></a>
  <span id="cartItemCount">${cartItemCount}</span>`
  $(".giohang").append(giohangs);
    
})