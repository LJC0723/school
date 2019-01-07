/**
 * Created by Mr on 2019/1/3.
 */
$(function () {
    getPublishList();
});
function getPublishList() {
    postAjax("publish_getPublishList.action",{},publishList);
}
function publishList(data) {
    var tHead =["ID","Publish Id","CommunityId","Publish Time","price","number","state"];
    var tData = [];
    for (var i = 0; i < data.length; i++) {
        var tdContent = [];
        tdContent.push(data[i].id);
        tdContent.push(data[i].publishId);
        tdContent.push(data[i].communityId);
        tdContent.push(data[i].publishTime);
        tdContent.push(data[i].price);
        tdContent.push(data[i].number);
        tdContent.push(data[i].state);
        var action="";
        tdContent.push(action);
        tData.push(tdContent);
    }
    TableAdvanced.init("#publishInformation", tHead, tData, true);
}