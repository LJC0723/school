/**
 * Created by Mr on 2019/1/5.
 */
$(function () {
    getPurchaseList();
});
function getPurchaseList() {
    postAjax("community_getCommunityList.action",{},communityList);
}
function communityList(data) {
    var tHead =["ID","商品名称","单价","数量","操作"];
    var tData = [];
    for (var i = 0; i < data.length; i++) {
        var tdContent = [];
        tdContent.push(data[i].goodsId);
        tdContent.push(data[i].goodsName);
        tdContent.push(data[i].goodsPrice);
        tdContent.push(data[i].goodsNumber);
        // tdContent.push(data[i].goodsPublisher);
        var action="";
        action +="<button class='btn btn-mini btn-info' onclick='changeCommunity()'>修改</button>";
        action +=" ";
        action +=" ";
        action +="<button class='btn btn-mini btn-danger' onclick='deleteUser("+data[i].goodsId+")'>删除</button>";
        tdContent.push(action);
        tData.push(tdContent);
    }
    TableAdvanced.init("#communityInformation", tHead, tData, true);
}
function deleteUser(id) {
    postAjax("community_deleteCommunity.action",{id:id},deleteSuccess);
}
function deleteSuccess(data) {
    window.location.href="adminCommunity.jsp";
}
function changeUser(id) {
    postAjax("community_deleteCommunity.action",{id:id},updateSuccess);
}
function updateSuccess(data) {
    window.location.href="updateCommunity.jsp";
}
function changeCommunity() {
    window.location.href="updateCommunity.jsp";
}