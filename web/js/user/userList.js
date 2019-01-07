/**
 * Created by Mr on 2019/1/3.
 */
$(function () {
    getUserList();
})
function getUserList() {
    // post("user_getUserList.action",{},userList);
    postAjax("user_getUserList.action",{},userList);
}
function userList(data) {
    var tHead =["ID","账号","用户名","身份","操作"];
    var tData = [];
    for (var i = 0; i < data.length; i++) {
        var tdContent = [];
        tdContent.push(data[i].id);
        tdContent.push(data[i].account);
        tdContent.push(data[i].username);
        tdContent.push(data[i].role);
        var action="";
        action +="<a class='btn btn-mini btn-info' onclick='changeUser()'>修改</a>";
        action +=" ";
        action +=" ";
        action +="<a class='btn btn-mini btn-danger' onclick='deleteUser("+data[i].id+")'>删除</a>";
        tdContent.push(action);
        tData.push(tdContent);
    }
    TableAdvanced.init("#userListInformation", tHead, tData, true);
}
function changeUser(id){
    postAjax("user_getUserList.action",{id:id},changeUserList);
}
function changeUser() {
    window.location.href="updateUser.jsp";
}


// function changeUserList(data) {
//     $(data).each(function (key,obj) {
//         var PlaneHtml = "";
//         PlaneHtml += "<form  id='form_PlaneInsert' class='form container-fluid' accept-charset='UTF-8' name='Planeform'  method='post'>"
//         PlaneHtml += "<div class='modal-dialog' role='document'>"
//         PlaneHtml += "<div class='modal-content'>"
//         PlaneHtml += "<div class='modal-header'>"
//         PlaneHtml += "<h5 class='modal-title' id='exampleModalLabel'>修改用户信息：</h5>"
//         PlaneHtml += "</div>"
//         PlaneHtml += "<div class='modal-body'>"
//         PlaneHtml += "<div class='row'>"
//         PlaneHtml += "<div class='col-md-3 col-md-offset-2'><p>名称</p></div>"
//         PlaneHtml += "<div class='col-md-7'><input type='text' id='pl.lineName' name='pl.lineName' class='form_put' value='"+polish(obj.lineName)+"'></div>"
//         PlaneHtml += "</div>"
//         var point = getAjax("user_getUserList.action",{});
//         PlaneHtml += "<div class='row'>"
//         PlaneHtml += "<div class='col-md-3 col-md-offset-2'><p>起点</p></div>"
//         PlaneHtml += "<div class='col-md-7'><select name='pl.startPoint'><option value='"+obj.lineName+"'>--未修改--</option>"
//         for(var i=0;i<point.length;i++) {
//             PlaneHtml += "<option value='" + point[i].code + "'>" + point[i].pointName + "</option>";
//         }
//         PlaneHtml += "</select></div></div>"
//         PlaneHtml += "<div class='row'>"
//         PlaneHtml += "<div class='col-md-3 col-md-offset-2'><p>终点</p></div>"
//         PlaneHtml += "<div class='col-md-7'><select name='pl.endPoint'><option value='"+obj.lineName+"'>--未修改--</option>"
//         for(var i=0;i<point.length;i++) {
//             PlaneHtml += "<option value='" + point[i].code + "'>" + point[i].pointName + "</option>";
//         }
//         PlaneHtml += "</select></div></div>"
//         PlaneHtml += "<div class='row'>"
//         PlaneHtml += "<div class='col-md-3 col-md-offset-2'><p>途经点</p></div>"
//         var j=1;
//         PlaneHtml += "<div class='col-md-7'><select id='middle'><option>--请依次选择途经点--</option>"
//         for(var i=0;i<point.length;i++) {
//             PlaneHtml += "<option value='" + point[i].pointName + "' id='" + point[i].code + "'>" + point[i].pointName + "</option>";
//         }
//         PlaneHtml += "</div>"
//         PlaneHtml += "<div class='col-md-12'><input type='text' id='pl.middlePoint' name='pl.middlePoint'  value='"+polish(obj.middlePoint)+"' class='form_put' style='display: none'></div>"
//         PlaneHtml += "</div>"
//         PlaneHtml += "<div class='row'>"
//         PlaneHtml += "<div class='col-md-7 col-md-offset-5'><input id='middle_point' value='' readonly='readonly' ></div>"
//         PlaneHtml += "</div>"
//         PlaneHtml += "<div class='row'>"
//         PlaneHtml += "<div class='col-md-3 col-md-offset-2'><p>总里程</p></div>"
//         PlaneHtml += "<div class='col-md-7'><input type='text' id='pl.mileage' name='pl.mileage' class='form_put'value='"+polish(obj.mileage)+"'></div>"
//         PlaneHtml += "</div>"
//         PlaneHtml += "<div class='row'>"
//         PlaneHtml += "<div class='col-md-3 col-md-offset-2'><p>飞行高度</p></div>"
//         PlaneHtml += "<div class='col-md-7'><input type='text' id='pl.lineHeight' name='pl.lineHeight' class='form_put'value='"+polish(obj.lineHeight)+"'></div>"
//         PlaneHtml += "</div>"
//         PlaneHtml += "</div>"
//         PlaneHtml += "<div class='modal-footer'>"
//         PlaneHtml += "<button type='button' class='btn btn-secondary' data-dismiss='modal' onclick='hide()'>取消</button>"
//         PlaneHtml += "<button type='button' class='btn btn-primary' onclick='addPlane()'>确定</button>"
//         PlaneHtml += "</div>"
//         PlaneHtml += "</div>"
//         PlaneHtml += "</div>"
//         PlaneHtml += "</form>"
//         $("#show").html(PlaneHtml);
//         $("#show").css('display','block');
//         var MiddlePoint=getAjax("point_getSomePoint.action",{points:obj.middlePoint});
//         var MiddleVal="";
//         for(var i=0;i<MiddlePoint.length;i++){
//             MiddleVal+= i==0 ? MiddlePoint[i].pointName:"->"+MiddlePoint[i].pointName;
//         }
//         document.getElementById("middle_point").value=MiddleVal;
//         $("#middle").change(function () {
//             if(j==1) {
//                 document.getElementById("pl.middlePoint").value = "";
//                 document.getElementById("middle_point").value = "";
//             }
//             var selected=$(this).children('option:selected').val();
//             var selectid=$(this).children('option:selected').attr("id");
//             var middleValue=document.getElementById("pl.middlePoint").value+selectid+";";
//             var middle_pointValue=j==1?document.getElementById("middle_point").value+selected:document.getElementById("middle_point").value+"->"+selected;
//             document.getElementById("pl.middlePoint").value=middleValue;
//             document.getElementById("middle_point").value=middle_pointValue;
//             j++;
//         })
//     })
// }

//
// function updatePlane(id) {
//     if(document.getElementById('pl.planeName').value==null||document.getElementById('pl.type').value==null){
//         modal("提示","修改失败，请填写完整信息！","hide()");
//     }else {
//         var param = $("#form_PlaneInsert").serializeArray();
//         postAjax('plane_updatePlane.action', param,PlaneSuccess);
//     }
//     hide();
// }
// function addPlaneList() {
//     var PlaneHtml = "";
//     PlaneHtml += "<form  id='form_PlaneInsert' class='form container-fluid' accept-charset='UTF-8' name='Planeform'  method='post'>"
//     PlaneHtml += "<div class='modal-dialog' role='document'>"
//     PlaneHtml += "<div class='modal-content'>"
//     PlaneHtml += "<div class='modal-header'>"
//     PlaneHtml += "<h5 class='modal-title' id='exampleModalLabel'>添加新的飞行线路：</h5>"
//     PlaneHtml += "</div>"
//     PlaneHtml += "<div class='modal-body'>"
//     PlaneHtml += "<div class='row'>"
//     PlaneHtml += "<div class='col-md-3 col-md-offset-2'><p>名称</p></div>"
//     PlaneHtml += "<div class='col-md-7'><input type='text' id='pl.lineName' name='pl.lineName' class='form_put'></div>"
//     PlaneHtml += "</div>"
//     var point = getAjax("point_getALLPoint.action",{});
//     PlaneHtml += "<div class='row'>"
//     PlaneHtml += "<div class='col-md-3 col-md-offset-2'><p>起点</p></div>"
//     PlaneHtml += "<div class='col-md-7'><select name='pl.startPoint'><option>--请选择--</option>"
//     for(var i=0;i<point.length;i++) {
//         PlaneHtml += "<option value='" + point[i].code + "'>" + point[i].pointName + "</option>";
//     }
//     PlaneHtml += "</select></div></div>"
//     PlaneHtml += "<div class='row'>"
//     PlaneHtml += "<div class='col-md-3 col-md-offset-2'><p>终点</p></div>"
//     PlaneHtml += "<div class='col-md-7'><select name='pl.endPoint'><option>--请选择--</option>"
//     for(var i=0;i<point.length;i++) {
//         PlaneHtml += "<option value='" + point[i].code + "'>" + point[i].pointName + "</option>";
//     }
//     PlaneHtml += "</select></div></div>"
//     PlaneHtml += "<div class='row'>"
//     PlaneHtml += "<div class='col-md-3 col-md-offset-2'><p>途经点</p></div>"
//     var j=1;
//     PlaneHtml += "<div class='col-md-7'><select id='middle'><option>--请依次选择途经点--</option>"
//     for(var i=0;i<point.length;i++) {
//         PlaneHtml += "<option value='" + point[i].pointName + "' id='" + point[i].code + "'>" + point[i].pointName + "</option>";
//     }
//     PlaneHtml += "</div>"
//     PlaneHtml += "<div class='col-md-12'><input type='text' id='pl.middlePoint' name='pl.middlePoint'  value='' class='form_put' style='display: none'></div>"
//     PlaneHtml += "</div>"
//     PlaneHtml += "<div class='row'>"
//     PlaneHtml += "<div class='col-md-7 col-md-offset-5'><input id='middle_point' value='' readonly='readonly' ></div>"
//     PlaneHtml += "</div>"
//     PlaneHtml += "<div class='row'>"
//     PlaneHtml += "<div class='col-md-3 col-md-offset-2'><p>总里程</p></div>"
//     PlaneHtml += "<div class='col-md-7'><input type='text' id='pl.mileage' name='pl.mileage' class='form_put'></div>"
//     PlaneHtml += "</div>"
//     PlaneHtml += "<div class='row'>"
//     PlaneHtml += "<div class='col-md-3 col-md-offset-2'><p>飞行高度</p></div>"
//     PlaneHtml += "<div class='col-md-7'><input type='text' id='pl.lineHeight' name='pl.lineHeight' class='form_put'></div>"
//     PlaneHtml += "</div>"
//     PlaneHtml += "</div>"
//     PlaneHtml += "<div class='modal-footer'>"
//     PlaneHtml += "<button type='button' class='btn btn-secondary' data-dismiss='modal' onclick='hide()'>取消</button>"
//     PlaneHtml += "<button type='button' class='btn btn-primary' onclick='addPlane()'>确定</button>"
//     PlaneHtml += "</div>"
//     PlaneHtml += "</div>"
//     PlaneHtml += "</div>"
//     PlaneHtml += "</form>"
//     $("#show").html(PlaneHtml);
//     $("#show").css('display','block');
//     $("#middle").change(function () {
//         var selected=$(this).children('option:selected').val();
//         var selectid=$(this).children('option:selected').attr("id");
//         var middleValue=document.getElementById("pl.middlePoint").value+selectid+";";
//         var middle_pointValue=document.getElementById("middle_point").value+"->"+selected;
//         document.getElementById("pl.middlePoint").value=middleValue;
//         if(j==1)
//             middle_pointValue=document.getElementById("middle_point").value+selected;
//         document.getElementById("middle_point").value=middle_pointValue;
//         j++;
//     })
// }
//
// function addPlane() {
//     if(document.getElementById('pl.lineName').value==null||document.getElementById('pl.lineHeight').value==null){
//         modal("提示","添加失败，请填写完整信息！","hide()");
//     }else {
//         var param = $("#form_PlaneInsert").serializeArray();
//         postAjax('line_addPlaneLine.action', param,PlaneSuccess);
//     }
//     hide();
// }
function deleteUser(id) {
    postAjax("user_deleteUser.action",{id:id},deleteSuccess);
    // modal("提示：","是否删除？","deleteUserr("+id+")");
}
function deleteUserr(id) {
    postAjax("user_deleteUser.action",{id:id},deleteSuccess);
}
function deleteSuccess(data) {
    window.location.href="userList.jsp";
    // if(data.resultCode=="200")
    //     modal("提示：","操作成功！","userReturn()");
    // else
    //     modal("提示：","删除失败，"+data.resultDesc,"userReturn()");
}
function userReturn() {
    window.location.href="userList.jsp";
}
