package org.jncc.dao;

import org.jncc.entity.CommunityEntity;

import java.util.List;

/**
 * Created by Mr on 2018/12/3.
 */
public interface CommunityDao {
    public boolean save(String sql, CommunityEntity community);
    public List<CommunityEntity> listCommunity(String sql, String key);
    public List<CommunityEntity> listCommunity(String sql, int id);
    public List<CommunityEntity> listCommunity(String sql);
    public List<CommunityEntity> listCommunity(String sql, Object[] keys);
    public boolean updateCommunity(String sql, Object[] obj);
    public void update(String sql,String username, String password);
    public void update(String sql,String username);
    public void update(String sql,int id);
    public void update(String sql,CommunityEntity community);
    public void update(String sql,Integer count,String username);
}
