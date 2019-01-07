/**
 * Created by Mr on 2019/1/5.
 */
/*
 使用说明
 三个传参，遮罩标题，遮罩内容，点击确定后调用的函数（可内附参数，则调用在此函数后添加hide()函数隐藏遮罩）
 若无调用函数，该位置可写为hide()
 */

function modal(title,content,url){
    var pageModal = "";
    // pageModal += "<div class='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>"
    pageModal += "<div class='modal-dialog' role='document'>"
    pageModal += "<div class='modal-content'>"
    pageModal += "<div class='modal-header'>"
    pageModal += "<h5 class='modal-title' id='exampleModalLabel'>"+title+"</h5>"
    pageModal += "</div>"
    pageModal += "<div class='modal-body'>"+content+"</div>"
    pageModal += "<div class='modal-footer'>"
    pageModal += "<button type='button' class='btn btn-secondary' data-dismiss='modal' onclick='hide()'>取消</button>"
    pageModal += "<button type='button' class='btn btn-primary' onclick='"+url+"'>确定</button>"
    pageModal += "</div>"
    pageModal += "</div>"
    pageModal += "</div>"
    // pageModal += "</div>"
    $("#show").html(pageModal);
    $("#show").css('display','block');
}
function modalwithout(title,content){
    var pageModal = "";
    // pageModal += "<div class='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>"
    pageModal += "<div class='modal-dialog' role='document'>"
    pageModal += "<div class='modal-content'>"
    pageModal += "<div class='modal-header'>"
    pageModal += "<h5 class='modal-title' id='exampleModalLabel'>"+title+"</h5>"
    pageModal += "</div>"
    pageModal += "<div class='modal-body'>"+content+"</div>"
    pageModal += "<div class='modal-footer'>"
    pageModal += "<button type='button' class='btn btn-secondary' data-dismiss='modal' onclick='hide()'>取消</button>"
    pageModal += "</div>"
    pageModal += "</div>"
    pageModal += "</div>"
    // pageModal += "</div>"
    $("#show").html(pageModal);
    $("#show").css('display','block');
}
function hide() {
    $("#show").css('display','none');
}
function loadingOn() {
    document.getElementById("over").style.display = "block";
    document.getElementById("layout").style.display = "block";
}
function lodingOff() {
    document.getElementById("over").style.display = "none";
    document.getElementById("layout").style.display = "none";
}