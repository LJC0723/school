<%--
  Created by IntelliJ IDEA.
  User: Mr
  Date: 2018/11/27
  Time: 21:53
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Campus idle goods trading platform</title>

    <!-- CSS -->
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,100,300,500">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/form-elements.css">
    <link rel="stylesheet" href="assets/css/style.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Favicon and touch icons -->
    <link rel="shortcut icon" href="assets/ico/favicon.png">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png">

</head>

<body>

<%--<!-- Top menu -->--%>
<%--<nav class="navbar navbar-inverse navbar-no-bg" role="navigation">--%>
    <%--<div class="container">--%>
        <%--<div class="navbar-header">--%>
            <%--<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar-1">--%>
                <%--<span class="sr-only">Toggle navigation</span>--%>
                <%--<span class="icon-bar"></span>--%>
                <%--<span class="icon-bar"></span>--%>
                <%--<span class="icon-bar"></span>--%>
            <%--</button>--%>
            <%--<a class="navbar-brand" href="login.jsp">Campus idle goods trading platform</a>--%>
        <%--</div>--%>
        <%--<!-- Collect the nav links, forms, and other content for toggling -->--%>
        <%--<div class="collapse navbar-collapse" id="top-navbar-1">--%>
            <%--&lt;%&ndash;<ul class="nav navbar-nav navbar-right">&ndash;%&gt;--%>
                <%--&lt;%&ndash;<li>&ndash;%&gt;--%>
							<%--&lt;%&ndash;<span class="li-text">&ndash;%&gt;--%>
								<%--&lt;%&ndash;Put some text or&ndash;%&gt;--%>
							<%--&lt;%&ndash;</span>&ndash;%&gt;--%>
                    <%--&lt;%&ndash;<a href="#"><strong>links</strong></a>&ndash;%&gt;--%>
                    <%--&lt;%&ndash;<span class="li-text">&ndash;%&gt;--%>
								<%--&lt;%&ndash;here, or some icons:&ndash;%&gt;--%>
							<%--&lt;%&ndash;</span>&ndash;%&gt;--%>
                    <%--&lt;%&ndash;<span class="li-social">&ndash;%&gt;--%>
								<%--&lt;%&ndash;<a href="#"><i class="fa fa-facebook"></i></a>&ndash;%&gt;--%>
								<%--&lt;%&ndash;<a href="#"><i class="fa fa-twitter"></i></a>&ndash;%&gt;--%>
								<%--&lt;%&ndash;<a href="#"><i class="fa fa-envelope"></i></a>&ndash;%&gt;--%>
								<%--&lt;%&ndash;<a href="#"><i class="fa fa-skype"></i></a>&ndash;%&gt;--%>
							<%--&lt;%&ndash;</span>&ndash;%&gt;--%>
                <%--&lt;%&ndash;</li>&ndash;%&gt;--%>
            <%--&lt;%&ndash;</ul>&ndash;%&gt;--%>
        <%--</div>--%>
    <%--</div>--%>
<%--</nav>--%>

<!-- Top content -->
<div class="top-content">
    <div class="inner-bg">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2 text">
                    <h1><strong>校 园 闲 置 物 品 </strong> 交易平台</h1>
                    <%--<h1><strong>Campus Idle Goods </strong> Trading Platform</h1>--%>
                    <div class="description">
                        <p>
                            <i>校园闲置物品交易平台</i>
                            <%--This is a free trading platform for students of nanjing university of aeronautics and astronautics.--%>
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3 form-box" style="solid-opacity: 20">
                    <div class="form-top">
                        <div class="form-top-left">
                            <h3>Login in</h3>
                            <p>Fill in the form below to login:</p>
                        </div>
                        <div class="form-top-right">
                            <i class="fa fa-envelope"></i>
                        </div>
                    </div>
                    <div class="form-bottom contact-form">
                        <form role="form" action="assets/contact.php" method="post">
                            <div class="form-group">
                                <label class="sr-only">Username</label>
                                <input type="text" name="user-username" placeholder="Username" class="contact-email form-control" id="user-username">
                            </div>
                            <div class="form-group">
                                <%--<label class="sr-only" for="contact-subject">Password</label>--%>
                                <label class="sr-only">Password</label>
                                <input type="text" name="user-password" placeholder="Password" class="contact-subject form-control" id="user-password">
                            </div>
                            <div style="text-align: center">
                                <button type="button" class="btn" id="btn-sign" style="background-color: #eacf7d">  登  录  </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="button" class="btn" id="btn-register" style="background-color: #eacf7d">  注  册  </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="submit" class="btn" style="background-color: #eacf7d">忘记密码</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>


<!-- Javascript -->
<script src="assets/js/jquery-1.11.1.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/js/jquery.backstretch.min.js"></script>
<script src="assets/js/retina-1.1.0.min.js"></script>
<script src="assets/js/scripts.js"></script>
<script src="js/user/login.js"></script>
<script src="js/user/register.js"></script>

<!--[if lt IE 10]>
<script src="assets/js/placeholder.js"></script>
<![endif]-->

</body>

</html>
