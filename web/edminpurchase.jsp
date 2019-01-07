<%--
  Created by IntelliJ IDEA.
  User: Mr
  Date: 2019/1/5
  Time: 20:22
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
                            <h3>购买商品</h3>
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
                                    <label class="control-label" >订单ID</label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input type="text" placeholder="5" class="span8" id="purchase-orderId"><span class="add-on"></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label">商品名称</label>
                                    <div class="controls">
                                        <input type="text" placeholder="Community Name" class="span8">
                                        <%--<span class="help-inline">至少5个字符</span>--%>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label" >商品ID</label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input type="text" placeholder="5" class="span8" id="purchase-communityId"><span class="add-on"></span>
                                        </div>
                                    </div>
                                </div>


                                <div class="control-group">
                                    <label class="control-label" >发布者ID</label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input type="text" placeholder="5" class="span8" id="purchase-publisherId"><span class="add-on"></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label" >评价</label>
                                    <div class="controls">
                                        <textarea class="span8" id="purchase-comment" rows="5"></textarea>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <div class="controls">
                                        <a class="btn btn-mini btn-info" id="btn-cpurchase" onclick="savePurchase()">添加</a>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <a class="btn btn-mini btn-inverse" href="adminPurchaseList.jsp">返回</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div><!--/.content-->
            </div>
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
<script src="js/purchase/cpurchase.js"></script>
</body>
</html>
