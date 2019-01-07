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
    var tHead =["Purchase Id","Order Id","Community Id","Comment","Publisher Id","Purchase Time"];
    var tData = [];
    for (var i = 0; i < data.length; i++) {
        var tdContent = [];
        tdContent.push(data[i].purchaseId);
        tdContent.push(data[i].orderId);
        tdContent.push(data[i].communityId);
        tdContent.push(data[i].comment);
        tdContent.push(data[i].publisherId);
        tdContent.push(data[i].purchaseTime);
        var action="";
        tdContent.push(action);
        tData.push(tdContent);
    }
    TableAdvanced.init("#purchaseInformation", tHead, tData, true);
}