package org.jncc.dao;

import org.jncc.entity.PublishEntity;

import java.util.List;

/**
 * Created by Mr on 2018/12/30.
 */
public interface PublishDao {
    //增
    public boolean save(String sql, PublishEntity order);

    //删
    public void update(String sql,int id);
    public void update(String sql,String username, String password);
    public void update(String sql,String username);
    public void update(String sql,Integer count,String username);

    //改
    public boolean updatePublish(String sql, Object[] obj);
    public void update(String sql,PublishEntity publish);

    //查
    public List<PublishEntity> listPublishers(String sql, String key);
    public List<PublishEntity> listPublishers(String sql);
    public List<PublishEntity> listPublishers(String sql, Object[] keys);
}
