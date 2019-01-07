package org.jncc.dao.impl;

import org.jncc.dao.DaoManager;
import org.jncc.dao.OrderDao;
import org.jncc.dao.UserDao;
import org.jncc.entity.OrdersEntity;
import org.omg.PortableInterceptor.ObjectReferenceFactory;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Mr on 2018/12/30.
 */
@Repository("orderDao")
public class OrderDaoImpl extends DaoManager implements OrderDao {

    @Override
    public boolean save(String sql, OrdersEntity order) {
        return this.insertByBean(sql,order);
    }

    @Override
    public void update(String sql, int id) {
        this.update(sql,new Object[]{id});
    }

    @Override
    public void update(String sql, OrdersEntity order) {
        this.update(sql,new Object[]{order.getCommunityId(),order.getPublisherId(),order.getCustomerId(),order.getCommunityNumber(),order.getOrderSum(),order.getOrderState(),order.getOrderTime()});
    }

    @Override
    public void update(String sql, String username, String password) {

    }

    @Override
    public void update(String sql, String username) {

    }

    @Override
    public void update(String sql, Integer count, String username) {

    }

    @Override
    public boolean updateOrder(String sql, Object[] obj) {
        return false;
    }

    @Override
    public List<OrdersEntity> listOrders(String sql, String key) {
        return null;
    }

    @Override
    public List<OrdersEntity> listOrders(String sql) {
        return this.query(sql,OrdersEntity.class);
    }

    @Override
    public List<OrdersEntity> listOrders(String sql, Object[] keys) {
        return null;
    }
}
