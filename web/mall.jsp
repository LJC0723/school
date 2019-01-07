<%--
  Created by IntelliJ IDEA.
  User: Mr
  Date: 2019/1/3
  Time: 10:41
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
            <li><a href="shopping.jsp"><i class="menu-icon icon-bold"></i> 主页 </a></li>
            <li><a href="publish.jsp"><i class="menu-icon icon-paste"></i> 发布商品 </a></li>
            <%--<li><a href="publishList.jsp"><i class="menu-icon icon-table"></i> 收藏夹 </a></li>--%>
            <%--<li><a href="orderList.jsp"><i class="menu-icon icon-bar-chart"></i> 购物车 </a></li>--%>
            <%--<li><a href="purchaseList.jsp"><i class="menu-icon icon-bar-chart"></i> 已下单 </a></li>--%>
            <%--<li><a href="purchaseList.jsp"><i class="menu-icon icon-bar-chart"></i> 已购买 </a></li>--%>
        </ul>
        <!--/.widget-nav-->
        <ul class="widget widget-menu unstyled">
            <li><a class="collapsed" data-toggle="collapse" href="#togglePages"><i class="menu-icon icon-cog">
            </i><i class="icon-chevron-down pull-right"></i><i class="icon-chevron-up pull-right">
            </i>今日推荐</a>
                <ul id="togglePages" class="collapse unstyled">
                    <li><a href="userList.jsp"><i class="icon-inbox"></i>最热</a></li>
                    <li><a href="publishList.jsp"><i class="icon-inbox"></i>最新</a></li>
                    <li><a href="purchaseList.jsp"><i class="icon-inbox"></i>好评榜</a></li>
                </ul>
            </li>
            <li><a href="user.jsp"><i class="menu-icon icon-signout"></i>返回 </a></li>
        </ul>
    </div>
    <!--/.sidebar-->
</div>
</body>
</html>
