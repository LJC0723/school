package org.jncc.dao;

import org.jncc.entity.OrdersEntity;
import org.jncc.entity.UserEntity;

import java.util.List;

/**
 * Created by Mr on 2018/12/30.
 */
public interface OrderDao {
    //增
    public boolean save(String sql, OrdersEntity order);

    //删
    public void update(String sql,int id);
    public void update(String sql,OrdersEntity order);
    public void update(String sql,String username, String password);
    public void update(String sql,String username);
    public void update(String sql,Integer count,String username);

    //改
    public boolean updateOrder(String sql, Object[] obj);

    //查
    public List<OrdersEntity> listOrders(String sql, String key);
    public List<OrdersEntity> listOrders(String sql);
    public List<OrdersEntity> listOrders(String sql, Object[] keys);
}
