/**
 * Created by Mr on 2019/1/5.
 */
/**
 * Created by Mr on 2019/1/3.
 */
$(function () {
    getPurchaseList();
});
function getPurchaseList() {
    postAjax("purchase_getPurchaseList.action",{},purchaseList);
}
function purchaseList(data) {
    var tHead =["ID","订单号","交易时间","评价","操作"];
    var tData = [];
    for (var i = 0; i < data.length; i++) {
        var tdContent = [];
        tdContent.push(data[i].purchaseId);
        tdContent.push(data[i].orderId);
        // tdContent.push(data[i].communityId);
        // tdContent.push(data[i].publisherId);
        tdContent.push(data[i].purchaseTime);
        tdContent.push(data[i].comment);
        var action="";
        action +="<button class='btn btn-mini btn-info' onclick='changePurchase()'>修改</button>";
        action +=" ";
        action +=" ";
        action +="<button class='btn btn-mini btn-danger' onclick='deletePurchase("+data[i].purchaseId+")'>删除</button>";
        tdContent.push(action);
        tData.push(tdContent);
    }
    TableAdvanced.init("#purchaseInformation", tHead, tData, true);
}
function deletePurchase(id) {
    postAjax("purchase_deletePurchase.action",{id:id},deleteSuccess);
}
function deleteSuccess(data) {
    window.location.href="adminPurchaseList.jsp";
}
function changePurchase() {
    window.location.href="updatePurchase.jsp";
}