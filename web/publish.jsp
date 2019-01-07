<%--
  Created by IntelliJ IDEA.
  User: Mr
  Date: 2018/12/4
  Time: 19:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User</title>
    <link type="text/css" href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link type="text/css" href="bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">
    <link type="text/css" href="css/theme.css" rel="stylesheet">
    <link type="text/css" href="images/icons/css/font-awesome.css" rel="stylesheet">
    <link type="text/css" href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600'
          rel='stylesheet'>
</head>
<body>
<jsp:include page="head.jsp"></jsp:include>
<!-- /navbar -->
<div class="wrapper">
    <div class="container">
        <div class="row">
            <jsp:include page="mall.jsp"></jsp:include>
            <div class="span9">
                <div class="content">

                    <div class="module">
                        <div class="module-head">
                            <h3>发布商品</h3>
                        </div>
                        <div class="module-body">

                            <%--<div class="alert">--%>
                                <%--<button type="button" class="close" data-dismiss="alert">×</button>--%>
                                <%--<strong>Warning!</strong> Something fishy here!--%>
                            <%--</div>--%>
                            <%--<div class="alert alert-error">--%>
                                <%--<button type="button" class="close" data-dismiss="alert">×</button>--%>
                                <%--<strong>Oh snap!</strong> Whats wrong with you?--%>
                            <%--</div>--%>
                            <%--<div class="alert alert-success">--%>
                                <%--<button type="button" class="close" data-dismiss="alert">×</button>--%>
                                <%--<strong>Well done!</strong> Now you are listening me :)--%>
                            <%--</div>--%>

                            <br />

                            <form class="form-horizontal row-fluid">
                                <div class="control-group">
                                    <label class="control-label" for="community-name">商品名称</label>
                                    <div class="controls">
                                        <input type="text" id="community-name" placeholder="Community Name" class="span8">
                                        <span class="help-inline">至少5个字符</span>
                                    </div>
                                </div>

                                <%--<div class="control-group">--%>
                                    <%--<label class="control-label" for="basicinput">商品描述</label>--%>
                                    <%--<div class="controls">--%>
                                        <%--<input type="text" id="basicinput" placeholder="新旧程度" class="span8" disabled>--%>
                                    <%--</div>--%>
                                <%--</div>--%>

                                <div class="control-group">
                                    <label class="control-label">商品描述</label>
                                    <div class="controls">
                                        <input data-title="A tooltip for the input" type="text" placeholder="新旧程度" data-original-title="" class="span8 tip">
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label" >商品标签</label>
                                    <div class="controls">
                                        <div class="input-prepend">
                                            <span class="add-on">#</span><input class="span8" type="text" placeholder="Type">
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label" >商品单价</label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input type="text" placeholder="5.000" class="span8" id="community-price"><span class="add-on">$</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label" >商品数量</label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input type="text" placeholder="300" class="span8" id="community-number"><span class="add-on"></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label" >发布者ID</label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input type="text" placeholder="5" class="span8" id="community-publisher"><span class="add-on"></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label" >支付方式</label>
                                    <div class="controls">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle btn" data-toggle="dropdown" href="#">ALIPAY<i class="icon-caret-down"></i></a>
                                            <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                                                <li><a href="#">支付宝</a></li>
                                                <li><a href="#">微信</a></li>
                                                <li><a href="#">零钱</a></li>
                                                <li><a href="#">银行卡</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <%--<div class="control-group">--%>
                                    <%--<label class="control-label" for="basicinput">Dropdown</label>--%>
                                    <%--<div class="controls">--%>
                                        <%--<select tabindex="1" data-placeholder="Select here.." class="span8">--%>
                                            <%--<option value="">Select here..</option>--%>
                                            <%--<option value="Category 1">First Row</option>--%>
                                            <%--<option value="Category 2">Second Row</option>--%>
                                            <%--<option value="Category 3">Third Row</option>--%>
                                            <%--<option value="Category 4">Fourth Row</option>--%>
                                        <%--</select>--%>
                                    <%--</div>--%>
                                <%--</div>--%>

                                <%--<div class="control-group">--%>
                                    <%--<label class="control-label">Radiobuttons</label>--%>
                                    <%--<div class="controls">--%>
                                        <%--<label class="radio">--%>
                                            <%--<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">--%>
                                            <%--Option one--%>
                                        <%--</label>--%>
                                        <%--<label class="radio">--%>
                                            <%--<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">--%>
                                            <%--Option two--%>
                                        <%--</label>--%>
                                        <%--<label class="radio">--%>
                                            <%--<input type="radio" name="optionsRadios" id="optionsRadios3" value="option3">--%>
                                            <%--Option three--%>
                                        <%--</label>--%>
                                    <%--</div>--%>
                                <%--</div>--%>

                                <%--<div class="control-group">--%>
                                    <%--<label class="control-label">Inline Radiobuttons</label>--%>
                                    <%--<div class="controls">--%>
                                        <%--<label class="radio inline">--%>
                                            <%--<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">--%>
                                            <%--Option one--%>
                                        <%--</label>--%>
                                        <%--<label class="radio inline">--%>
                                            <%--<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">--%>
                                            <%--Option two--%>
                                        <%--</label>--%>
                                        <%--<label class="radio inline">--%>
                                            <%--<input type="radio" name="optionsRadios" id="optionsRadios3" value="option3">--%>
                                            <%--Option three--%>
                                        <%--</label>--%>
                                    <%--</div>--%>
                                <%--</div>--%>

                                <%--<div class="control-group">--%>
                                    <%--<label class="control-label">Checkboxes</label>--%>
                                    <%--<div class="controls">--%>
                                        <%--<label class="checkbox">--%>
                                            <%--<input type="checkbox" value="">--%>
                                            <%--Option one--%>
                                        <%--</label>--%>
                                        <%--<label class="checkbox">--%>
                                            <%--<input type="checkbox" value="">--%>
                                            <%--Option two--%>
                                        <%--</label>--%>
                                        <%--<label class="checkbox">--%>
                                            <%--<input type="checkbox" value="">--%>
                                            <%--Option three--%>
                                        <%--</label>--%>
                                    <%--</div>--%>
                                <%--</div>--%>

                                <%--<div class="control-group">--%>
                                    <%--<label class="control-label">Inline Checkboxes</label>--%>
                                    <%--<div class="controls">--%>
                                        <%--<label class="checkbox inline">--%>
                                            <%--<input type="checkbox" value="">--%>
                                            <%--Option one--%>
                                        <%--</label>--%>
                                        <%--<label class="checkbox inline">--%>
                                            <%--<input type="checkbox" value="">--%>
                                            <%--Option two--%>
                                        <%--</label>--%>
                                        <%--<label class="checkbox inline">--%>
                                            <%--<input type="checkbox" value="">--%>
                                            <%--Option three--%>
                                        <%--</label>--%>
                                    <%--</div>--%>
                                <%--</div>--%>

                                <div class="control-group">
                                    <label class="control-label" >卖家留言</label>
                                    <div class="controls">
                                        <textarea class="span8" rows="5"></textarea>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <div class="controls">
                                        <button type="button" class="btn btn-mini btn-info" id="btn-cpublish" onclick="savePublish()">保存</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button type="submit" class="btn btn-mini btn-inverse">取消</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div><!--/.content-->
            </div>
            <!--/.span9-->
        </div>
    </div>
    <!--/.container-->
</div>
<!--/.wrapper-->
<div class="footer">
    <div class="container">
        Campus idle goods trading platform.
    </div>
</div>
<script src="scripts/jquery-3.1.1.min.js" type="text/javascript"></script>
<script src="scripts/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>
<script src="bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="scripts/flot/jquery.flot.js" type="text/javascript"></script>
<script src="scripts/flot/jquery.flot.resize.js" type="text/javascript"></script>
<script src="scripts/datatables/jquery.dataTables.js" type="text/javascript"></script>
<script src="scripts/common.js" type="text/javascript"></script>
<script src="js/publish/cpublish.js"></script>

</body>
</html>
