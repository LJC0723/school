/**
 * Created by Mr on 2018/12/29.
 */
function postRightAjax(url,param,callback){
    $.ajax({
        url : url,
        type : 'post',
        data : param,
        async: false,
        dataType : 'json',
        success : function(data, status) {
            if (status == "success") {
                callback(data);
            }
        },
        error : function(data, status, e) {
            alert(e);
        },
        complete : function() {
        }
    });
}
$(function () {
    $('#btn-sign').on("click",function(){
        var username = $('#user-username').val();
        var password = $('#user-password').val();
        var param = {
            'user.username': username,
            'user.password': password,
        };
        if (username === "" || password === "") {
            alert("用户名密码不能为空！");
        }
        else {
            postRightAjax("user_login.action",param,loginSuccess);
        }
    });
});
function loginSuccess(data) {
    if(data.resultCode === "200"){
        window.location.href="http://localhost:8080//user.jsp";
        return;
    }
    else if(data.resultCode === "400"){
        alert(data.resultDesc);
    }
}