<%--
  Created by IntelliJ IDEA.
  User: Mr
  Date: 2019/1/3
  Time: 22:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
</head>
<body>
<div class="span3">
    <div class="sidebar">
        <!--/.widget-nav-->

        <ul class="widget widget-menu unstyled">
            <%--<li><a href="shopping.jsp"><i class="menu-icon icon-bold"></i> 进入交易平台 </a></li>--%>
            <li><a href="userList.jsp"><i class="menu-icon icon-book"></i> 用户信息管理 </a></li>
            <li><a href="adminCommunity.jsp"><i class="menu-icon icon-paste"></i> 商品信息管理 </a></li>
            <li><a href="adminPublishList.jsp"><i class="menu-icon icon-table"></i>查看发布记录 </a></li>
            <li><a href="adminOrderList.jsp"><i class="menu-icon icon-bar-chart"></i>查看下单记录 </a></li>
            <li><a href="adminPurchaseList.jsp"><i class="menu-icon icon-bar-chart"></i>查看交易记录 </a></li>
        </ul>
        <!--/.widget-nav-->
        <ul class="widget widget-menu unstyled">
            <li><a class="collapsed" data-toggle="collapse" href="#togglePages"><i class="menu-icon icon-cog">
            </i><i class="icon-chevron-down pull-right"></i><i class="icon-chevron-up pull-right">
            </i>统计</a>
                <ul id="togglePages" class="collapse unstyled">
                    <li><a href="userList.jsp"><i class="icon-inbox"></i>用户统计</a></li>
                    <li><a href="adminPublishList.jsp"><i class="icon-inbox"></i>发布统计</a></li>
                    <li><a href="adminPurchaseList.jsp"><i class="icon-inbox"></i>交易统计</a></li>
                </ul>
            </li>
            <li><a href="login.jsp"><i class="menu-icon icon-signout"></i>退出登录 </a></li>
        </ul>
    </div>
    <!--/.sidebar-->
</div>
</body>
</html>
