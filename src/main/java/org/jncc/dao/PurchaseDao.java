package org.jncc.dao;

import org.jncc.entity.PurchaseEntity;

import java.util.List;

/**
 * Created by Mr on 2018/12/30.
 */
public interface PurchaseDao {
    //增
    public boolean save(String sql, PurchaseEntity order);

    //删
    public void update(String sql,int id);
    public void update(String sql,String username, String password);
    public void update(String sql,String username);
    public void update(String sql,Integer count,String username);

    //改
    public boolean updatePurchase(String sql, Object[] obj);
    public void update(String sql,PurchaseEntity purchase);

    //查
    public List<PurchaseEntity> listPurchasers(String sql, String key);
    public List<PurchaseEntity> listPurchasers(String sql);
    public List<PurchaseEntity> listPurchasers(String sql, Object[] keys);
}
