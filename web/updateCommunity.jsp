<%--
  Created by IntelliJ IDEA.
  User: Mr
  Date: 2019/1/6
  Time: 9:16
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
<jsp:include page="adminHead.jsp"></jsp:include>
<!-- /navbar -->
<div class="wrapper">
    <div class="container">
        <div class="row">
            <jsp:include page="adminNav.jsp"></jsp:include>
            <div class="span9">
                <div class="content">

                    <div class="module">
                        <div class="module-head">
                            <h3>商品信息修改</h3>
                        </div>
                        <div class="module-body">

                            <br />

                            <form class="form-horizontal row-fluid">
                                <div class="control-group">
                                    <label class="control-label" >ID</label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input type="text" placeholder="5.000" class="span8" id="ccommunityid">
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label" for="ccommunity-name">商品名称</label>
                                    <div class="controls">
                                        <input type="text" id="ccommunity-name" placeholder="Community Name" class="span8">
                                        <span class="help-inline">至少5个字符</span>
                                    </div>
                                </div>

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
                                            <input type="text" placeholder="5.000" class="span8" id="ccommunity-price"><span class="add-on">$</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label" >商品数量</label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input type="text" placeholder="300" class="span8" id="ccommunity-number"><span class="add-on"></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label" >发布者ID</label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input type="text" placeholder="5" class="span8" id="ccommunity-publisher"><span class="add-on"></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label" >留言</label>
                                    <div class="controls">
                                        <textarea class="span8" rows="5"></textarea>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <div class="controls">
                                        <a class="btn btn-mini btn-info" id="btn-ccommunity" onclick="updateCommunity()">修改</a>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <a class="btn btn-mini btn-inverse" href="adminCommunity.jsp">返回</a>
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
<script src="scripts/flot/jquery.flot.pie.js"></script>
<script src="scripts/flot/jquery.flot.js" type="text/javascript"></script>
<script src="scripts/flot/jquery.flot.resize.js" type="text/javascript"></script>
<script src="scripts/datatables/jquery.dataTables.js" type="text/javascript"></script>
<script src="scripts/common.js" type="text/javascript"></script>
<script src="js/common/global.js"></script>
<script src="js/common/tableAdvaced.js"></script>
<script src="js/community/adminCommunity.js"></script>
<script src="js/community/updateCommunity.js"></script>
</body>
</html>
