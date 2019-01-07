/**
 * Created by Mr on 2019/1/5.
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
function updatePublish() {
    var id = $('#publishid').val();
    var publisherId = $('#pcommunity-publisher').val();
    var communityId = $('#pcommunity-publisher').val();
    var publishTime = $('#pcommunity-name').val();
    var price = $('#pcommunity-price').val();
    var number = $('#pcommunity-number').val();
    // var state = $('#pcommunity-state').val();
    var param = {
        'publish.id': id,
        'publish.publisherId': publisherId,
        'publish.communityId': communityId,
        'publish.publishTime': publishTime,
        'publish.price': price,
        'publish.number': number,
        'publish.state': 1,
    };
    if (publisherId === "") {
        alert("发布者ID不能为空！");
    }else if(communityId === ""){
        alert("商品ID不能为空！");
    }else if(price === ""){
        alert("商品单价不能为空！");
    } else {
        postRightAjax("publish_updatePublish.action",param,uPpublish);
    }
};
function uPpublish(data) {
    if(data.resultCode === "200"){
        alert("修改发布记录成功");
        window.location.href="http://localhost:8080//adminPublishList.jsp";
        return;
    }
    else if(data.resultCode === "400"){
        alert(data.resultDesc);
    }
}
