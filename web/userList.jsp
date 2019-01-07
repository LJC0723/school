<%--
  Created by IntelliJ IDEA.
  User: Mr
  Date: 2018/12/4
  Time: 16:46
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
            <!--/.span3-->
            <div class="span9">
                <div class="content">
                    <!--/.btn-controls-->
                    <div class="module">
                        <div class="module-head">
                            <h3>UserInfo</h3>
                        </div>
                        <div class="module-body">
                            <p>
                                User Manager
                            </p>
                            <table class="table table-bordered" id="userListInformation" style="font-size: small"> </table>

                            <br/>

                            <div class="control-group">
                                <div class="controls">
                                    <a class="btn btn-mini btn-info" id="btn-admin-user" href="edminuser.jsp">添加</a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a class="btn btn-mini btn-inverse" href="login.jsp">返回</a>
                                </div>
                            </div>

                            <br/>

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
<%--<script src="scripts/jquery-1.9.1.min.js" type="text/javascript"></script>--%>
<script src="scripts/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>
<script src="bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="scripts/flot/jquery.flot.pie.js"></script>
<script src="scripts/flot/jquery.flot.js" type="text/javascript"></script>
<script src="scripts/flot/jquery.flot.resize.js" type="text/javascript"></script>
<script src="scripts/datatables/jquery.dataTables.js" type="text/javascript"></script>
<script src="scripts/common.js" type="text/javascript"></script>
<script src="js/common/global.js"></script>
<script src="js/common/tableAdvaced.js"></script>
<script src="js/common/show.js"></script>
<%--<script src="js/common/pagination.js"></script>--%>
<script src="js/user/userList.js"></script>
</body>
</html>
