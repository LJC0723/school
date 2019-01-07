/**
 * Created by Mr on 2019/1/2.
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
    $('#btn-register').on("click",function(){
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
            postRightAjax("user_register.action",param,registerSuccess);
        }
    });
});
function registerSuccess(data) {
    if(data.resultCode === "200"){
        alert("注册成功");
        window.location.href="http://localhost:8080//login.jsp";
        return;
    }
    else if(data.resultCode === "400"){
        alert(data.resultDesc);
    }
}
