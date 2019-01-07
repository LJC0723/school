/**
 * Created by Mr on 2019/1/5.
 */
/*
 分页函数
 使用说明：调用setDivHtml设置需要分页的div
 头部信息调用getHeadContent函数     //本项目中调用完需清空字符串
 数据中部信息调用pagination函数并根据返回值，若为1清空数据
 尾部按钮信息调用addPageButton函数
 */
var urlN;
var divHtml;
var pageNum;
var bgColor;
var pageContent = [];
// var currentPage = 0;    //当前页
var deserveContent = "";    //分页内容
var headContent = "";
var hasData = 0;
function pagination(key,content,dataLength){
    //key为ajax返回的key,content为生成的网页Js字符串形式,dataLength为data长度
    pageNum = dataLength/10;
    var page = (key+1) % 10;
    if (page==0||key+1 == dataLength){
        if(dataLength/10<=5){
            content += "</tbody></table>";
            content += "<ul class='pagination'>"
            content += "<li><a onclick='firstPage()' >&laquo;</a></li>"
            for(var i=0;i<pageNum;i++){
                content += "<li id='"+(i+1)+"'><a onclick='turnPage(this)'>"+(i+1)+"</a></li>"
            }
            content += "<li><a onclick='lastPage()'>&raquo;</a></li>"
            content += "</ul>"
        }
        else if(pageContent.length<=3){
            content += "<ul class='pagination'>"
            content += "<li><a onclick='firstPage()'>&laquo;</a></li>"
            content += "<li id='1'><a onclick='turnPage(this)'>1</a></li>"
            content += "<li id='2'><a onclick='turnPage(this)'>2</a></li>"
            content += "<li id='3'><a onclick='turnPage(this)'>3</a></li>"
            content += "<li id='4'><a onclick='turnPage(this)'>4</a></li>"
            content += "<li id='5'><a onclick='turnPage(this)'>5</a></li>"
            content += "<li><a onclick='lastPage()'>&raquo;</a></li>"
            content += "</ul>"
        }

        else if(pageNum>pageContent.length+5){
            content += "<ul class='pagination'>"
            content += "<li><a onclick='firstPage()'>&laquo;</a></li>"
            content += "<li id='"+(pageContent.length-2)+"'><a onclick='turnPage(this)'>"+(pageContent.length-2)+"</a></li>"
            content += "<li id='"+(pageContent.length-1)+"'><a onclick='turnPage(this)'>"+(pageContent.length-1)+"</a></li>"
            content += "<li id='"+pageContent.length+"'><a onclick='turnPage(this)'>"+pageContent.length+"</a></li>"
            content += "<li id='"+(pageContent.length+1)+"'><a onclick='turnPage(this)'>"+(pageContent.length+1)+"</a></li>"
            content += "<li id='"+(pageContent.length+2)+"'><a onclick='turnPage(this)'>"+(pageContent.length+2)+"</a></li>"
            content += "<li><a onclick='lastPage()'>&raquo;</a></li>"
            content += "</ul>"
        }
        else {
            content += "<ul class='pagination'>"
            content += "<li><a onclick='firstPage()'>&laquo;</a></li>"
            content += "<li><a onclick='turnPage(this)'>"+(pageNum-4)+"</a></li>"
            content += "<li><a onclick='turnPage(this)'>"+(pageNum-3)+"</a></li>"
            content += "<li><a onclick='turnPage(this)'>"+(pageNum-2)+"</a></li>"
            content += "<li><a onclick='turnPage(this)'>"+(pageNum-1)+"</a></li>"
            content += "<li><a onclick='turnPage(this)'>"+pageNum+"</a></li>"

            content += "<li><a onclick='lastPage()'>&raquo;</a></li>"
            content += "</ul>"
        }
        deserveContent = headContent +content;
        pageContent.push(deserveContent);
        hasData = 1;
        return 1;
    }
    else return 0;
}

//设置需要分页的div
function setDivHtml(div){
    divHtml = div;
}

//进入的显示
function startPage(n){
    urlN = n;
    if (hasData==0){
        pageContent[0] = headContent + pageContent[0];
    }
    $("#"+divHtml+"").html(pageContent[0]);
    getUrl(InsertId,urlN);
    hasData = 0;
}

//显示第一页
function firstPage(){
    $("#"+divHtml+"").html(pageContent[0]);
    getUrl(InsertId,urlN);
}

//显示最后一页
function lastPage(){
    $("#"+divHtml+"").html(pageContent[pageContent.length-1]);
    getUrl(InsertId,urlN);
}

function turnPage(obj){
    pageN = $(obj).text()-1;
    $("#"+divHtml+"").html(pageContent[pageN]);
    $("#"+(pageN+1)+"").addClass("active");
    $("#"+(pageN+1)+"").children().addClass("pagination_fontColor");
    getUrl(InsertId,urlN);
}

function getheadContent(head){
    headContent = head;
}

function addPageButton(buttonContent){
    //参数为js字符串形式的html
    var length = pageContent.length;
    if (length==0){
        pageContent[0] = buttonContent;
    }
    else {
        for(var i=0;i<pageContent.length;i++){
            pageContent[i] = pageContent[i]+buttonContent;
        }
    }
}

function clearPageContent(){
    pageContent = [];
}


//对存在canvas的分页
function addCanvas(canvasContent){
    var length = pageContent.length;
    if (length==0){
        pageContent[0] = canvasContent;
    }
    else {
        for (var i=0;i<length;i++){
            pageContent[i] += canvasContent;
        }
    }
}

//获取data中的content  htmlStr为js书写的html,data为数据库返回集合，htmlInt为类型
function getdataContent(htmlStr,data,htmlInt){
    if(htmlInt==1){
        $(data).each(function (key,obj) {
            htmlStr += "<tr onclick='getSectionList("+obj.tunnelId+")'>"
            htmlStr +="<th>"+obj.tunnelName+"</th>"
            htmlStr +="<th>"+obj.mileSign+"</th>"
            htmlStr +="<th>"+obj.tunnelEncode+"</th>"
            htmlStr +="<th>"+obj.mileBeg+"</th>"
            htmlStr +="<th>"+obj.mileEnd+"</th>"
            htmlStr +="<th>"+obj.tunnelRemark+"</th>"
            htmlStr += "</tr><tr>"
            htmlStr +="<th><button class='passbutton btn btn-default' onclick='tunnelChange("+obj.role+","+obj.tunnelId+")'>修改线路</button>"
            htmlStr +="<button class='passbutton btn btn-default' onclick='tunnelDelete("+obj.role+","+obj.tunnelId+")'>删除</button></th>"
            htmlStr += "</tr>"
            if (pagination(key,htmlStr,data.length)){
                htmlStr = "";
            }
        });
    }
    else if(htmlInt==2){
        $(data).each(function (key,obj) {
            if(key%2==1) {
                htmlStr += "<div class='row requestli clickableli' style='background-color:rgb(244,247,249) '>"
            }
            else htmlStr += "<div class='row requestli clickableli'>"
            htmlStr += "<div onclick='getSubwayList(" + obj.secId + ")'>"
            htmlStr +="<div class='col-md-1'><p>"+obj.secName+"</p></div>"
            htmlStr +="<div class='col-md-1'><p>"+obj.builder+"</p></div>"
            htmlStr +="<div class='col-md-1'><p>"+obj.secMileSign+"</p></div>"
            htmlStr +="<div class='col-md-2'><p>"+obj.secEncode+"</p></div>"
            htmlStr +="<div class='col-md-1'><p>"+obj.secMileBeg+"</p></div>"
            htmlStr +="<div class='col-md-1'><p>"+obj.secMileEnd+"</p></div>"
            htmlStr +="<div class='col-md-2'><p>"+obj.secRemark+"</p></div>"
            htmlStr += "</div>"
            htmlStr +="<div class='col-md-1'><button class='passbutton btn btn-default' onclick='sectionChange("+obj.role+","+obj.secId+")'>修改标段</button></div>"
            htmlStr +="<div class='col-md-1'><button class='passbutton btn btn-default' onclick='sectionDelete("+obj.role+","+obj.secId+","+obj.tunnelId+")'>删除</button></div>"
            htmlStr += "</div>"
            if (pagination(key,htmlStr,data.length)){
                htmlStr = "";
            }
        });
    }
    else if(htmlInt==3){
        $(data).each(function (key,obj) {
            if(key%2==1) {
                htmlStr += "<div class='row requestli clickableli'style='background-color:rgb(244,247,249)'>"
            }
            else htmlStr += "<div class='row requestli clickableli'>"
            htmlStr += "<div onclick='getCaveList(" + obj.subwayId + ")'>"
            htmlStr +="<div class='col-md-1'><p>"+obj.subName+"</p></div>"
            htmlStr +="<div class='col-md-1'><p>"+obj.subMileSign+"</p></div>"
            htmlStr +="<div class='col-md-1'><p>"+obj.subEncode+"</p></div>"
            htmlStr +="<div class='col-md-1'><p>"+obj.subMileBeg+"</p></div>"
            htmlStr +="<div class='col-md-1'><p>"+obj.subMileEnd+"</p></div>"
            htmlStr +="<div class='col-md-3'><p>"+obj.subRemark+"</p></div>"
            htmlStr += "</div>"
            htmlStr +="<div class='col-md-1'><button class='passbutton btn btn-default' onclick='changeSubway("+obj.role+","+obj.subwayId+")'>修改隧道</button></div>"
            htmlStr +="<div class='col-md-1'><button class='passbutton btn btn-default' onclick='subwayDelete("+obj.role+","+obj.subwayId+","+obj.secId+")'>删除</button></div>"
            htmlStr += "</div>"
            if (pagination(key,htmlStr,data.length)){
                htmlStr = "";
            }
        });
    }
    else if(htmlInt==4){
        $(data).each(function (key,obj) {
            if(key%2==1) {
                htmlStr += "<div class='row requestli clickableli'style='background-color:rgb(244,247,249) '>"
            }
            else htmlStr += "<div class='row requestli clickableli'>"
            htmlStr += "<div onclick='getSurfaceList("+obj.caveId+")'>"
            htmlStr +="<div class='col-md-1'><p>"+obj.caveName+"</p></div>"
            htmlStr +="<div class='col-md-1'><p>"+obj.caveMileSign+"</p></div>"
            htmlStr +="<div class='col-md-2'><p>"+obj.caveEncode+"</p></div>"
            htmlStr +="<div class='col-md-1'><p>"+obj.caveMileBeg+"</p></div>"
            htmlStr +="<div class='col-md-1'><p>"+obj.caveMileEnd+"</p></div>"
            htmlStr +="<div class='col-md-1'><p>"+obj.workPointType+"</p></div>"
            htmlStr +="<div class='col-md-1'><p>"+obj.roadBedType+"</p></div>"
            htmlStr +="<div class='col-md-2'><p>"+obj.caveRemark+"</p></div>"
            htmlStr +="</div>"
            htmlStr +="<div class='col-md-1'><button class='passbutton btn btn-default' onclick='changeCave("+obj.caveId+")'>修改隧洞</button></div>"
            htmlStr +="<div class='col-md-1'><button class='passbutton btn btn-default' onclick='caveDelete("+obj.caveId+","+obj.subwayId+")'>删除</button></div>"
            htmlStr +="</div>"
            if (pagination(key,htmlStr,data.length)){
                htmlStr = "";
            }
        });
    }
    else if(htmlInt==5){
        $(data).each(function (key,obj) {
            if(key%2==1) {
                htmlStr += "<div class='row requestli clickableli'style='background-color:rgb(244,247,249) '>"
            }
            else htmlStr += "<div class='row requestli clickableli'>"
            htmlStr += "<div onclick='getDesignSurfaceList("+obj.surId+",\""+obj.surName+"\")'>"
            htmlStr +="<div class='col-md-1'><p>"+obj.surName+"</p></div>"
            htmlStr +="<div class='col-md-1'><p>"+obj.designSurName+"</p></div>"
            htmlStr +="<div class='col-md-1'><p>"+obj.designSurArea+"</p></div>"
            htmlStr +="<div class='col-md-1'><p>"+obj.realSurArea+"</p></div>"
            htmlStr +="<div class='col-md-1'><p>"+obj.realSurMile+"</p></div>"
            htmlStr +="<div class='col-md-3'><p>("+obj.baseX+","+obj.baseY+","+obj.baseH+")</p></div>"
            htmlStr +="</div>"
            htmlStr +="<div class='col-md-1'><button class='passbutton btn btn-default' onclick='changeSurface("+obj.surId+")'>修改断面信息</button></div>"
            // SufaceHtml +="<div class='col-md-1'><button class='passbutton btn btn-default' onclick='getSurfaceContrast("+obj.surId+")'>断面对比信息</button></div>"
            htmlStr +="<div class='col-md-1'><button class='passbutton btn btn-default' onclick='deleteSurfaceDesign("+obj.surId+","+obj.caveId+")'>删除</button></div>"
            htmlStr += "</div>"
            if (pagination(key,htmlStr,data.length)){
                htmlStr = "";
            }
        });
    }
}
