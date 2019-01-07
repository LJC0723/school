/**
 * Created by Mr on 2019/1/5.
 */
$(function () {
    getPublishList();
});
function getPublishList() {
    postAjax("publish_getPublishList.action",{},publishList);
}
function publishList(data) {
    var tHead =["ID","卖家","商品","发布时间","操作"];
    var tData = [];
    for (var i = 0; i < data.length; i++) {
        var tdContent = [];
        tdContent.push(data[i].id);
        tdContent.push(data[i].publishId);
        tdContent.push(data[i].communityId);
        tdContent.push(data[i].publishTime);
        // tdContent.push(data[i].price);
        // tdContent.push(data[i].number);
        // tdContent.push(data[i].state);
        var action="";
        action +="<button class='btn btn-mini btn-info' onclick='changePublish()'>修改</button>";
        action +=" ";
        action +=" ";
        action +="<button class='btn btn-mini btn-danger' onclick='deletePublish("+data[i].id+")'>删除</button>";
        tdContent.push(action);
        tData.push(tdContent);
    }
    TableAdvanced.init("#publishInformation", tHead, tData, true);
}
function deletePublish(id) {
    postAjax("publish_deletePublish.action",{id:id},deleteSuccess);
}
function deleteSuccess(data) {
    window.location.href="adminPublishList.jsp";
}
function changePublish() {
    window.location.href="updatePublish.jsp";
}