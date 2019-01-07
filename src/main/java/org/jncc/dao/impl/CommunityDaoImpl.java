package org.jncc.dao.impl;

import org.jncc.dao.CommunityDao;
import org.jncc.dao.DaoManager;
import org.jncc.entity.CommunityEntity;
import org.jncc.service.CommunityService;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Mr on 2018/12/3.
 */
@Repository("communityDao")
public class CommunityDaoImpl extends DaoManager implements CommunityDao {
    @Override
    public boolean save(String sql, CommunityEntity community){
        return this.insertByBean(sql,community);
    }
    @Override
    public List<CommunityEntity> listCommunity(String sql, String key){
        return this.query(sql,new Object[]{key},CommunityEntity.class);
    }

    @Override
    public List<CommunityEntity> listCommunity(String sql, int id) {
        return this.query(sql,new Object[]{id},CommunityEntity.class);
    }

    @Override
    public List<CommunityEntity> listCommunity(String sql){
        return this.query(sql,CommunityEntity.class);
    }
    @Override
    public List<CommunityEntity> listCommunity(String sql, Object[] keys){
        return this.query(sql,keys,CommunityEntity.class);
    }
    @Override
    public boolean updateCommunity(String sql, Object[] obj){
        return this.update(sql,obj);
    }
    @Override
    public void update(String sql,String username, String password){
        this.update(sql,new Object[]{password,username});
    }
    @Override
    public void update(String sql,String username){
        this.update(sql,new Object[]{username});
    }

    @Override
    public void update(String sql, int id) {
        this.update(sql,new Object[]{id});
    }

    @Override
    public void update(String sql, CommunityEntity community) {
        this.update(sql,new Object[]{community.getGoodsName(),community.getGoodsPrice(),community.getGoodsNumber(),community.getGoodsPublisher()});
    }

    @Override
    public void update(String sql,Integer count,String username){
        this.update(sql,new Object[]{count,username});
    }
}
