/**
 * Created by Mr on 2019/1/3.
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
function savePublish() {
        var goodsName = $('#community-name').val();
        var goodsPrice = $('#community-price').val();
        var goodsNumber = $('#community-number').val()  ;
        var goodsPublisher = $('#community-publisher').val();
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
        alert("发布成功");
        window.location.href="http://localhost:8080//shopping.jsp";
        return;
    }
    else if(data.resultCode === "400"){
        alert(data.resultDesc);
    }
}