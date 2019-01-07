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
            <jsp:include page="nav.jsp"></jsp:include>
            <div class="span9">
                <div class="content">

                    <!--/.btn-controls-->


                    <div class="module">
                        <div class="module-head">
                            <h3>CommunityInfo</h3>
                        </div>
                        <div class="module-body">
                            <p>
                                Community Manager
                            </p>
                            <br />
                            <table class="table table-bordered">
                                <thead>
                                <th>Id</th>
                                <th>CommunityInfo</th>
                                <th>Add</th>
                                <th>Del</th>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Community</td>
                                    <td><a class="btn btn-mini">Button</a></td>
                                    <td><a class="btn btn-mini">Button</a></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Community</td>
                                    <td><a class="btn btn-mini btn-primary">Button</a></td>
                                    <td><a class="btn btn-mini btn-primary">Button</a></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Community</td>
                                    <td><a class="btn btn-mini btn-info">Button</a></td>
                                    <td><a class="btn btn-mini btn-info">Button</a></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Community</td>
                                    <td><a class="btn btn-mini btn-success">Button</a></td>
                                    <td><a class="btn btn-mini btn-success">Button</a></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Community</td>
                                    <td><a class="btn btn-mini btn-warning">Button</a></td>
                                    <td><a class="btn btn-mini btn-warning">Button</a></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Community</td>
                                    <td><a class="btn btn-mini btn-danger">Button</a></td>
                                    <td><a class="btn btn-mini btn-danger">Button</a></td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Community</td>
                                    <td><a class="btn btn-mini btn-inverse">Button</a></td>
                                    <td><a class="btn btn-mini btn-inverse">Button</a></td>
                                </tr>
                                </tbody>
                            </table>
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

</body>
</html>
