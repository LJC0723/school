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
function saveOrder() {
    var communityId = $('#corder-communityid').val();
    var publisherId = $('#corder-publisherId').val();
    var customerId = $('#corder-customerId').val()  ;
    var communityNumber = $('#corder-communityNumber').val();
    var orderSum = $('#corder-orderSum').val();
    var orderState = $('#corder-orderState').val();
    // var orderTime = $('#corder-orderTime').val();

    var myDate = new Date();
    myDate.getYear();        //获取当前年份(2位)
    myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    myDate.getMonth();       //获取当前月份(0-11,0代表1月)
    myDate.getDate();        //获取当前日(1-31)
    myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
    myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)
    myDate.getHours();       //获取当前小时数(0-23)
    myDate.getMinutes();     //获取当前分钟数(0-59)
    myDate.getSeconds();     //获取当前秒数(0-59)
    myDate.getMilliseconds();    //获取当前毫秒数(0-999)
    myDate.toLocaleDateString();     //获取当前日期
    // var mytime=myDate.toLocaleTimeString();     //获取当前时间
    myDate.toLocaleString();        //获取日期与时间

    var param = {
        'order.communityId': communityId,
        'order.publisherId': publisherId,
        'order.customerId': customerId,
        'order.communityNumber': communityNumber,
        'order.orderSum': orderSum,
        'order.orderState': orderState,
        'order.orderTime': "2019-01-06 15:28:26",
    };
    if (communityId === "") {
        alert("商品ID不能为空！");
    }else if(publisherId === ""){
        alert("发布者ID不能为空！");
    }else if(customerId === ""){
        alert("买家ID不能为空！");
    }else if(communityNumber === ""){
        alert("商品数量不能为空！");
    }else if(orderSum === ""){
        alert("订单总额不能为空！");
    } else {
        postRightAjax("order_addOrder.action",param,addOrder);
    }
};
function addOrder(data) {
    if(data.resultCode === "200"){
        alert("下单成功");
        window.location.href="http://localhost:8080//adminOrderList.jsp";
        return;
    }
    else if(data.resultCode === "400"){
        alert(data.resultDesc);
    }
}