/**
 * Created by Mr on 2019/1/5.
 */
$(function () {
    getOrderList();
});
function getOrderList() {
    postAjax("order_getOrderList.action",{},orderList);
}
function orderList(data) {
    var tHead =["ID","商品号","买家","总额","状态","下单时间","操作"];
    var tData = [];
    for (var i = 0; i < data.length; i++) {
        var tdContent = [];
        tdContent.push(data[i].orderId);
        tdContent.push(data[i].communityId);
        // tdContent.push(data[i].publishId);
        tdContent.push(data[i].customerId);
        // tdContent.push(data[i].communityNumber);
        tdContent.push(data[i].orderSum);
        tdContent.push(data[i].orderState);
        tdContent.push(data[i].orderTime);
        var action="";
        action +="<button class='btn btn-mini btn-info' onclick='changeOrder()'>修改</button>";
        // action +=" ";
        // action +=" ";
        action +="<button class='btn btn-mini btn-danger' onclick='deleteOrder("+data[i].orderId+")'>删除</button>";
        tdContent.push(action);
        tData.push(tdContent);
    }
    TableAdvanced.init("#orderInformation", tHead, tData, true);
}
function deleteOrder(id) {
    postAjax("order_deleteOrder.action",{id:id},deleteSuccess);
}
function deleteSuccess(data) {
    window.location.href="adminOrderList.jsp";
}
function changeOrder() {
    window.location.href="updateOrder.jsp";
}