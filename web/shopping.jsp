<%--
  Created by IntelliJ IDEA.
  User: Mr
  Date: 2018/12/4
  Time: 16:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mall</title>
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
            <!--/.span3-->
            <div class="span9">
                <div class="content">
                    <div class="module">
                        <div class="module-head">
                            <h3>校园闲置物品交易平台</h3>
                        </div>
                        <div class="module-option clearfix">
                            <form>
                                <div class="input-append pull-left">
                                    <input type="text" class="span3" style="height: 30;" placeholder="Search by name...">
                                    <button type="submit" class="btn">
                                        <i class="icon-search"></i>
                                    </button>
                                </div>
                            </form>
                            <div class="btn-group pull-right" data-toggle="buttons-radio">
                                <button type="button" class="btn">
                                    最新</button>
                                <button type="button" class="btn">
                                    最热</button>
                                <button type="button" class="btn">
                                    好评</button>
                            </div>
                        </div>

                        <div class="module-body" id="shopping">

                        </div>
                    </div>
                </div>
                <!--/.content-->
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
<script src="scripts/flot/jquery.flot.pie.js" type="text/javascript"></script>
<script src="scripts/flot/jquery.flot.js" type="text/javascript"></script>
<script src="scripts/flot/jquery.flot.resize.js" type="text/javascript"></script>
<script src="scripts/datatables/jquery.dataTables.js" type="text/javascript"></script>
<script src="scripts/common.js" type="text/javascript"></script>
<script src="js/common/global.js"></script>
<script src="js/common/tableAdvaced.js"></script>
<script src="js/community/shopping.js"></script>

</body>
</html>
