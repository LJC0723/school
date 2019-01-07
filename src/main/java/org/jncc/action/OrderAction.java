package org.jncc.action;

import org.jncc.cause.ResultCause;
import org.jncc.entity.OrdersEntity;
import org.jncc.service.OrderService;
import org.jncc.service.PublishService;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Mr on 2018/12/30.
 */
@Controller("orderAction")
@Scope("prototype")
public class OrderAction {
    @Resource(name="orderService")
    private OrderService orderService;
    private ResultCause result = new ResultCause();
    private OrdersEntity order;
    private int id;
    private List<OrdersEntity> orderEntities;

    public String addOrder(){
        result = orderService.addOrder(order);
        return "LOGIN_SUCCESS";
    }

    public String deleteOrder(){
        result = orderService.updateOrder(id);
        return "LOGIN_SUCCESS";
    }

    public String updateOrder(){
        result = orderService.updateOrder(order);
        return "LOGIN_SUCCESS";
    }

    public String getOrderList(){
        orderEntities = orderService.getOrder();
        return "GET_ORDER_SUCCESS";
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public OrderService getOrderService() {
        return orderService;
    }

    public void setOrderService(OrderService orderService) {
        this.orderService = orderService;
    }

    public ResultCause getResult() {
        return result;
    }

    public void setResult(ResultCause result) {
        this.result = result;
    }

    public OrdersEntity getOrder() {
        return order;
    }

    public void setOrder(OrdersEntity order) {
        this.order = order;
    }

    public List<OrdersEntity> getOrderEntities() {
        return orderEntities;
    }

    public void setOrderEntities(List<OrdersEntity> orderEntities) {
        this.orderEntities = orderEntities;
    }
}
