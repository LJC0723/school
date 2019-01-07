package org.jncc.dao;


import org.jncc.entity.UserEntity;

import java.util.List;

public interface UserDao {
    public boolean save(String sql, UserEntity user);
    public List<UserEntity> listUsers(String sql, String key);
    public List<UserEntity> listUsers(String sql);
    public List<UserEntity> listUsers(String sql, Object[] keys);
    public boolean updateUser(String sql, Object[] obj);
    public void update(String sql,String username, String password);
    public void update(String sql,String username);
    public void update(String sql,int id);
    public void update(String sql,UserEntity user);
    public void update(String sql,Integer count,String username);
}
