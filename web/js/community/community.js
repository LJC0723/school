/**
 * Created by Mr on 2019/1/3.
 */
$(function () {
    getPurchaseList();
});
function getPurchaseList() {
    postAjax("community_getCommunityList.action",{},communityList);
}
function communityList(data) {
    var tHead =["Goods Id","Goods Name","Goods Price","Goods Number","Goods Publisher"];
    var tData = [];
    for (var i = 0; i < data.length; i++) {
        var tdContent = [];
        tdContent.push(data[i].goodsId);
        tdContent.push(data[i].goodsName);
        tdContent.push(data[i].goodsPrice);
        tdContent.push(data[i].goodsNumber);
        tdContent.push(data[i].goodsPublisher);
        var action="";
        tdContent.push(action);
        tData.push(tdContent);
    }
    TableAdvanced.init("#communityInformation", tHead, tData, true);
}