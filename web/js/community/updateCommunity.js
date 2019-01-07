/**
 * Created by Mr on 2019/1/6.
 */
function postRightAjax(url,param,callback){
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
function saveCommunity() {
    var goodsName = $('#ccommunity-name').val();
    var goodsPrice = $('#ccommunity-price').val();
    var goodsNumber = $('#ccommunity-number').val()  ;
    var goodsPublisher = $('#ccommunity-publisher').val();
    var param = {
        'community.goodsName': goodsName,
        'community.goodsPrice': goodsPrice,
        'community.goodsNumber': goodsNumber,
        'community.goodsPublisher': goodsPublisher,
    };
    if (goodsName === "") {
        alert("商品名称不能为空！");
    }else if(goodsPrice === ""){
        alert("商品价格不能为空！");
    }else if(goodsNumber === ""){
        alert("商品数量不能为空！");
    } else {
        postRightAjax("community_addCommunity.action",param,addCommunity);
    }
};
function addCommunity(data) {
    if(data.resultCode === "200"){
        alert("添加成功");
        window.location.href="http://localhost:8080//adminCommunity.jsp";
        return;
    }
    else if(data.resultCode === "400"){
        alert(data.resultDesc);
    }
}
function updateCommunity() {
    var id = $('#ccommunityid').val();
    var goodsName = $('#ccommunity-name').val();
    var goodsPrice = $('#ccommunity-price').val();
    var goodsNumber = $('#ccommunity-number').val()  ;
    var goodsPublisher = $('#ccommunity-publisher').val();
    var param = {
        'community.goodsId': id,
        'community.goodsName': goodsName,
        'community.goodsPrice': goodsPrice,
        'community.goodsNumber': goodsNumber,
        'community.goodsPublisher': goodsPublisher,
    };
    if (id === "") {
        alert("商品ID不能为空！");
    }else if(goodsPrice === ""){
        alert("商品价格不能为空！");
    }else if(goodsNumber === ""){
        alert("商品数量不能为空！");
    } else {
        postRightAjax("community_updateCommunity.action",param,uCommunity);
    }
};
function uCommunity(data) {
    if(data.resultCode === "200"){
        alert("修改商品信息成功");
        window.location.href="http://localhost:8080//adminCommunity.jsp";
        return;
    }
    else if(data.resultCode === "400"){
        alert(data.resultDesc);
    }
}