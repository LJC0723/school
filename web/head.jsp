<%--
  Created by IntelliJ IDEA.
  User: Mr
  Date: 2019/1/3
  Time: 8:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
</head>
<body>
<div class="navbar navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container">
            <a class="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
                <i class="icon-reorder shaded"></i></a><a class="brand" href="index.html">User</a>
            <div class="nav-collapse collapse navbar-inverse-collapse">
                <ul class="nav nav-icons">
                    <li class="active"><a href="#"><i class="icon-envelope"></i></a></li>
                    <li><a href="#"><i class="icon-eye-open"></i></a></li>
                    <li><a href="#"><i class="icon-bar-chart"></i></a></li>
                </ul>
                <form class="navbar-search pull-left input-append" action="#">
                    <input type="text" class="span3" style="height: 30">
                    <button class="btn" type="button">
                        <i class="icon-search"></i>
                    </button>
                </form>
                <ul class="nav pull-right">
                    <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">提醒<b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="checkUser.jsp">审核消息</a></li>
                            <li><a href="checkUser.jsp">发布商品消息</a></li>
                            <li><a href="checkGoods.jsp">下单商品消息</a></li>
                            <li class="divider"></li>
                            <li class="nav-header">Example Header</li>
                            <li><a href="checkGoods.jsp">More</a></li>
                        </ul>
                    </li>
                    <li><a href="Notice.jsp">用户 </a></li>
                    <li class="nav-user dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <img src="images/user.png" class="nav-avatar" />
                        <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="userInfo.jsp">个人信息</a></li>
                            <li><a href="security.jsp">账号与安全</a></li>
                            <li><a href="News.jsp">新消息提醒</a></li>
                            <li class="divider"></li>
                            <li><a href="switchAccount.jsp">切换账号</a></li>
                            <li><a href="login.jsp">退出登录</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- /.nav-collapse -->
        </div>
    </div>
    <!-- /navbar-inner -->
</div>
</body>
</html>
