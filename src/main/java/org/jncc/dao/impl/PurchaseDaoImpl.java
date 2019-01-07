package org.jncc.dao.impl;

import org.jncc.dao.DaoManager;
import org.jncc.dao.PublishDao;
import org.jncc.dao.PurchaseDao;
import org.jncc.entity.PurchaseEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Mr on 2018/12/30.
 */
@Repository("purchaseDao")
public class PurchaseDaoImpl extends DaoManager implements PurchaseDao {
    @Override
    public boolean save(String sql, PurchaseEntity purchase) {
        return this.insertByBean(sql,purchase);
    }

    @Override
    public void update(String sql, int id) {
        this.update(sql,new Object[]{id});
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
    public boolean updatePurchase(String sql, Object[] obj) {
        return false;
    }

    @Override
    public void update(String sql, PurchaseEntity purchase) {
        this.update(sql,new Object[]{purchase.getOrderId(),purchase.getCommunityId(),purchase.getComment(),purchase.getPublisherId(),purchase.getPurchaseTime()});
    }

    @Override
    public List<PurchaseEntity> listPurchasers(String sql, String key) {
        return null;
    }

    @Override
    public List<PurchaseEntity> listPurchasers(String sql) {
        return this.query(sql,PurchaseEntity.class);
    }

    @Override
    public List<PurchaseEntity> listPurchasers(String sql, Object[] keys) {
        return null;
    }
}
