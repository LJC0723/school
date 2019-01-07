package org.jncc.dao.impl;

import org.jncc.dao.DaoManager;
import org.jncc.dao.OrderDao;
import org.jncc.dao.PublishDao;
import org.jncc.entity.PublishEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Mr on 2018/12/30.
 */
@Repository("publishDao")
public class PublisheDaoImpl extends DaoManager implements PublishDao {
    @Override
    public boolean save(String sql, PublishEntity publish) {
        return this.insertByBean(sql,publish);
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
    public boolean updatePublish(String sql, Object[] obj) {
        return this.update(sql,obj);
    }

    @Override
    public void update(String sql, PublishEntity publish) {
        this.update(sql,new Object[]{publish.getCommunityId(),publish.getPublishTime(),publish.getPrice(),publish.getNumber(), publish.getState()});
    }

    @Override
    public List<PublishEntity> listPublishers(String sql, String key) {
        return null;
    }

    @Override
    public List<PublishEntity> listPublishers(String sql) {
        return this.query(sql,PublishEntity.class);
    }

    @Override
    public List<PublishEntity> listPublishers(String sql, Object[] keys) {
        return null;
    }
}
