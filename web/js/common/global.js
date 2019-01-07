/**
 * Created by Mr on 2019/1/2.
 */
function postAjax(url,param,callback){
    $.ajax({
        url : url,
        type : 'post',
        dataType : 'json',
        data : param,
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
function getAjax(url,param){
    var info;
    $.ajax({
        url : url,
        type : 'post',
        data : param,
        async: false,
        dataType : 'json',
        success : function(data, status) {
            if (status == "success") {
                info= data;
            }
        },
        error : function(data, status, e) {
            alert(e);
        },
        complete : function() {
        }
    });
    return info;
}
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