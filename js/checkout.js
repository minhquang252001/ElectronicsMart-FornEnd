$(document).ready(function(){
    var checkin= localStorage.getItem("giohang")
    if(checkin){
        var check = JSON.parse(checkin);
        var checkout ="";
        for(var i =0; i < check.length;i++){
            var checkremove = JSON.stringify(check[i]);
            var Product= [];
            Product.push(check[i])
            
            checkout += `<tr class="rem1">
                            <td class="invert idtable">${i + 1}</td>
                            
                            <td class="invert-image">
                                    <img src="${check[i].images}" alt=" " class="img-responsive cart-image">
                            </td>
                            <td class="invert">
                                <div class="quantity">
                                <span>${check[i].quanlity}</span>
                                </div>
                            </td>
                            <td class="invert">${check[i].title}</td>
                            <td class="invert">${check[i].price}.000VNĐ</td>
                            <td class="invert">
                                <div class="rem">
                                    <div class="close1" dataremove='${checkremove}'> </div>
                                </div>
                            </td>
                        </tr>`
        }
    }

    
    $(".checkproduct").append(checkout);
    
    $('body').on('click', '.close1', function () {
        var removes = $(this).attr('dataremove');
        var removeObj = JSON.parse(removes);
        var giohangString = localStorage.getItem("giohang");
        var giohangObj = JSON.parse(giohangString);
        var index = -1;
        for (var i = 0; i < giohangObj.length; i++) {
            if (JSON.stringify(giohangObj[i]) === JSON.stringify(removeObj)) {
                index = i;
                break;
            }
        }
        if(confirm("Bạn có chắc chắn muốn xóa không?")){
        // Xóa đối tượng khỏi mảng nếu tìm thấy
            if (index !== -1) {
                giohangObj.splice(index, 1);
        
                // Lưu danh sách đã cập nhật lại vào localStorage
                localStorage.setItem("giohang", JSON.stringify(giohangObj));
                
                location.reload();
            }
        }
    
    });

    $('.oderss').click(function(){
        var orders= JSON.parse(checkin);
        orders.forEach(function(order) {
        var idProduct = order.id;
        var price =order.price;
        var quanlity =order.quanlity;
        console.log("ID:", idProduct);
        console.log("Tên:", order.title);
        console.log("Giá:", price);
        console.log("Số lượng:", quanlity);
        console.log("Hình ảnh:", order.images);
        console.log("------------------------------");
        

        $.ajax({
            url:"http://localhost:8080/productdetail",
            method:"post",
            data:{idProduct : idProduct,quantity: quanlity}
        }).done(function(reuslt){
            var newProductDetail = reuslt.data.idProductDetail;
            var newQuantity = reuslt.data.quantity;

            console.log("kiểm tra" , newProductDetail)
            console.log("kiểm tra" , newQuantity)
            console.log("kiểm tra" , price)

            $.ajax({
            url:"http://localhost:8080/orderdetail",
            method:"post",
            data:{idProductDetail : newProductDetail, quantity: newQuantity ,price: price}
            }).done(function(demo){
                localStorage.removeItem("giohang");
                alert("Đặt hàng thành công")
                location.reload();

            })
           
        })

        });
    })
})