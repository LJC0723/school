package org.jncc.service;

import org.jncc.cause.ResultCause;
import org.jncc.entity.OrdersEntity;
import org.jncc.entity.PublishEntity;

import java.util.List;

/**
 * Created by Mr on 2018/12/30.
 */
public interface OrderService {
    public ResultCause addOrder(OrdersEntity order);
    public ResultCause updateOrder(int id);
    public ResultCause updateOrder(OrdersEntity order);
    public List<OrdersEntity> getOrder();
    public List<OrdersEntity> getUserByCount();
}
