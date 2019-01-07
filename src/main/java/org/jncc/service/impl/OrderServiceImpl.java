package org.jncc.service.impl;

import org.jncc.Utils.ConstErrorCode;
import org.jncc.cause.ResultCause;
import org.jncc.dao.OrderDao;
import org.jncc.dao.PublishDao;
import org.jncc.entity.OrdersEntity;
import org.jncc.service.OrderService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Mr on 2018/12/30.
 */
@Service("orderService")
public class OrderServiceImpl implements OrderService {
    @Resource(name = "orderDao")
    private OrderDao orderDao;

    @Override
    public ResultCause addOrder(OrdersEntity order) {
        ResultCause result = new ResultCause();
        String sql = "insert into orders (community_id,publisher_id,customer_id,community_number,order_sum,order_state,order_time) values (:communityId,:publisherId,:customerId,:communityNumber,:orderSum,:orderState,:orderTime)";
        orderDao.save(sql,order);
        result.setCause(ConstErrorCode.SUCCESS_CODE,"");
        return result;
    }

    @Override
    public ResultCause updateOrder(int id) {
        ResultCause result = new ResultCause();
        String sql="delete from orders where order_id = ?";
        orderDao.update(sql,id);
        result.setCause("200","");
        return result;
    }

    @Override
    public ResultCause updateOrder(OrdersEntity order) {
        ResultCause result = new ResultCause();
        String sql="update orders set community_id=?,publisher_id=?,customer_id=?,community_number=?,order_sum=?,order_state=?,order_time=? where order_id="+order.getOrderId()+"";
        orderDao.update(sql,order);
        result.setCause("200","");
        return result;
    }

    @Override
    public List<OrdersEntity> getOrder() {
        String sql="select * from orders";
        return orderDao.listOrders(sql);
    }

    @Override
    public List<OrdersEntity> getUserByCount() {
        return null;
    }
}
