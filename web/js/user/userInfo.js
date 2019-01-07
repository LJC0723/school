/**
 * Created by Mr on 2019/1/2.
 */
$(function () {
    getUserList();
})
function getUserList() {
    postAjax("user_getUserList.action",{},userList);
}
function userList(data) {
    var tHead =["ID","账号","用户名","身份"];
    var tData = [];
    for (var i = 0; i < data.length; i++) {
        var tdContent = [];
        tdContent.push(data[i].id);
        tdContent.push(data[i].account);
        tdContent.push(data[i].username);
        tdContent.push(data[i].role);
        tData.push(tdContent);
    }
    TableAdvanced.init("#userInformation", tHead, tData, true);
}