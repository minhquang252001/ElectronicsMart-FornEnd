
$(document).ready(function () {
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