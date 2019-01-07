/**
 * Created by Mr on 2019/1/3.
 */

jQuery(document).ready(function () {
    var param = {};
    post('community_getCommunityList.action',param,function (data) {
        var srcDiv = "";
        srcDiv+="<div class='wrapper' style='background: white'>";
        srcDiv+="<div class='container'>";
        srcDiv+="<div class='row'>";
        srcDiv+="<div class='span9'>  ";
        srcDiv+="<div class='content'>";
        srcDiv+="<div class='module'>";
        $(data).each(function (key,obj) {
            if (key<8){
                srcDiv+="<div class='span6' style='width: 39%; height: auto'>";
                srcDiv+="<div class='media user'>";
                srcDiv+="<div class='media user'><a class='media-avatar pull-left'><img src='images/user.png'></a>";
                srcDiv+="<div class='media-body'><h3 class='media-title'>"+obj.goodsName+"</h3>";
                srcDiv+="<p><small class='muted'>"+obj.goodsNumber+"</small></p>";
                srcDiv+="<div class='media-option btn-group shaded-icon'>";
                srcDiv+="<a onclick='orderThis("+obj.goodsId+")'><button class='btn btn-small'>下单</button></a>";
                srcDiv+="<button class='btn btn-small' onclick='purchaseThis("+obj.goodsId+")'>购买</button>";
                srcDiv+="<a href='community.jsp'><button class='btn btn-small'><i class='icon-share-alt'></i></button></a>";
                srcDiv+="</div>";
                srcDiv+="</div>";
                srcDiv+="</div>";
                srcDiv+="</div>";
                srcDiv+="</div>";
            }
        })
        // <i class='icon-envelope'></i>
        srcDiv+="</div>";
        srcDiv+="</div>";
        srcDiv+="</div>";
        srcDiv+="</div>";
        srcDiv+="</div>";
        srcDiv+="</div>";
        $("#shopping").html(srcDiv);
    })
    // //购物车进入按钮设置
    // var cartDiv = "";
    // param = {username:userName};
    // post('/ShoppingCart/getUserCartNumber',param,function (data) {
    //     cartDiv+="<div class='cart_icon'><a href='../../..iews/Cart.jsp?username="+userName+"'>";
    //     cartDiv+="<img src='../../../statics/images/Home/bag.png' alt='>";
    //     cartDiv+="<a href='cart.html'>";
    //     cartDiv+="<div class='cart_num'>"+data+"</div>";
    //     cartDiv+="</a></div>";
    //     cartDiv+="<div class='cart_text'>bag</div>";
    //     //            <div class="cart_price">$39.99 (1)</div>
    //     $("#homeToCart").html(cartDiv);
    // })
});
function orderThis(id) {
    //根据id找到相关属性
    var communityId = id;
    post('community_getCommunityList.action',param,function (data){

    })
    var publisherId = 1;
    // var customerId = $('#corder-customerId').val()  ;
    var communityNumber = 1;
    var orderSum = 1;
    // var orderState = $('#corder-orderState').val();
    // var orderTime = $('#corder-orderTime').val();
    var param = {
        'order.communityId': communityId,
        'order.publisherId': publisherId,
        'order.customerId': 1,
        'order.communityNumber': communityNumber,
        'order.orderSum': orderSum,
        'order.orderState': 1,
        'order.orderTime': "2019-01-06 15:28:26",
    };
    if (communityId === null) {
        alert("商品ID不能为空！");
    }else {
        alert("正在下单……");
        postRightAjax("order_addOrder.action",param,uorder);
    }
}
function uorder(data) {
    if(data.resultCode === "200"){
        alert("下单成功");
        window.location.href="http://localhost:8080//shopping.jsp";
        return;
    }
    else if(data.resultCode === "400"){
        alert(data.resultDesc);
    }
}
function purchaseThis(id) {
    var orderId = 2;
    var communityId = id;
    // var comment = $('#purchase-comment').val()  ;
    // var publisherId = $('#purchase-publisherId').val();
    var param = {
        'purchase.orderId': orderId,
        'purchase.communityId': communityId,
        'purchase.comment': "snd",
        'purchase.publisherId': 3,
    };
    if (orderId  === "") {
        alert("订单ID不能为空！");
    } else {
        alert("正在购买……");
        postRightAjax("purchase_addPurchase.action",param,uPurchase);
    }
};
function uPurchase(data) {
    if(data.resultCode === "200"){
        alert("购买成功");
        window.location.href="http://localhost:8080//shopping.jsp";
        return;
    }
    else if(data.resultCode === "400"){
        alert(data.resultDesc);
    }
}
function post(url,param,callback){
    $.ajax({
        url : url,
        type : 'post',
        data : param,
        async: false,
        dataType : 'json',
        success : function(data, status) {
            if (status == "success") {
                callback(data);
            }
        },
        error : function(data, status, e) {
            alert(e);
        },
        complete : function() {
        }
    });
}

