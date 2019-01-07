/**
 * Created by Mr on 2019/1/2.
 */
var TableAdvanced = function () {
    var initTable = function(id,head,data,isAdvanced) {

        var temp = [];
        for (var i = 0; i < data.length; i++) {
            var tmpObj = [];
            for(var item in data[i]){
                if(typeof(data[i][item])   ==   "undefined"){
                    tmpObj.push("");
                }else{
                    tmpObj.push(data[i][item]);
                }
            }
            temp.push(tmpObj);
        }
        var headObj = [];
        for(var th=0;th<head.length;th++){
            var tTitle =  {"sTitle" : head[th]};
            headObj.push(tTitle);
        }
        var disLen = 5;
        var sortCol = 2;
        if(isAdvanced == undefined || isAdvanced){isAdvanced=true;disLen=10;sortCol=1}
        var oTable = $(id).dataTable( {
            dom: "Bfrtip",
            buttons: [
                {
                    extend: "copy",
                    className: "btn-sm"
                },
                {
                    extend: "csv",
                    className: "btn-sm"
                },
                {
                    extend: "excel",
                    className: "btn-sm"
                },
                {
                    extend: "pdfHtml5",
                    className: "btn-sm"
                },
                {
                    extend: "print",
                    className: "btn-sm"
                }
            ],
            "aoColumnDefs": [
                { "aTargets": [ 0 ] }
            ],
            "aaSorting": [[sortCol, 'desc']],
            "aLengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            "searching":isAdvanced,
            "bLengthChange": isAdvanced,
            // set the initial value
            "iDisplayLength": disLen,
            /* Reduced data set */
            "aaData" : temp,
            "aoColumns" : headObj,

            "oLanguage": {
                "sProcessing": "正在加载中......",
                "sLengthMenu": "每页显示 _MENU_ 条记录",
                "sZeroRecords": "对不起，查询不到相关数据！",
                "sEmptyTable": "表中无数据存在！",
                "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
                "sInfoEmpty": "没有记录可以显示",
                "sInfoFiltered": "数据表中共为 _MAX_ 条记录",
                // "sSearch": "搜索",
                "oPaginate": {
                    "sFirst": "首页",
                    "sPrevious": "上一页",
                    "sNext": "下一页",
                    "sLast": "末页"
                }
            }, response: true
        });

    }

    return {

        //main function to initiate the module
        init: function (id,head,data,isAdvanced) {

            if (!jQuery().dataTable) {
                return;
            }
            // if ( $.fn.dataTable.IsDataTable( id ) ) {
            //     $(id).DataTable().destroy();
            // }
            initTable(id,head,data,isAdvanced);
            // $(id+"_paginate" >ul).addClass("pagination");
        }

    };

}();