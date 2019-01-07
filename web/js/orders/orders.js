/**
 * Created by Mr on 2019/1/3.
 */
$(function () {
    getOrderList();
});
function getOrderList() {
    postAjax("order_getOrderList.action",{},orderList);
}
function orderList(data) {
    var tHead =["Order Id","CommunityId","Publish Id","Customer Id","Community Number","Order Sum","Order State","Order Time"];
    var tData = [];
    for (var i = 0; i < data.length; i++) {
        var tdContent = [];
        tdContent.push(data[i].orderId);
        tdContent.push(data[i].communityId);
        tdContent.push(data[i].publishId);
        tdContent.push(data[i].customerId);
        tdContent.push(data[i].communityNumber);
        tdContent.push(data[i].orderSum);
        tdContent.push(data[i].orderState);
        tdContent.push(data[i].orderTime);
        var action="";
        tdContent.push(action);
        tData.push(tdContent);
    }
    TableAdvanced.init("#orderInformation", tHead, tData, true);
}