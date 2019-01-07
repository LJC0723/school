package org.jncc.dao.impl;

import org.jncc.dao.DaoManager;
import org.jncc.dao.UserDao;
import org.jncc.entity.UserEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("userDao")
public class UserDaoImpl extends DaoManager implements UserDao {
    @Override
    public boolean save(String sql, UserEntity user) {
        return this.insertByBean(sql,user);
    }

    @Override
    public List<UserEntity> listUsers(String sql, String key) {
        return this.query(sql,new Object[]{key},UserEntity.class);
    }

    @Override
    public List<UserEntity> listUsers(String sql) {
        return this.query(sql,UserEntity.class);
    }

    @Override
    public List<UserEntity> listUsers(String sql, Object[] keys) {
        return this.query(sql,keys,UserEntity.class);
    }

    @Override
    public boolean updateUser(String sql, Object[] obj) {
        return this.update(sql,obj);
    }

    @Override
    public void update(String sql, String username,String password){
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
    public void update(String sql, UserEntity user) {
        this.update(sql,new Object[]{user.getAccount(),user.getUsername(),user.getPassword(),user.getRole()});
    }

    @Override
    public void update(String sql,Integer count,String username){
        this.update(sql,new Object[]{count,username});
    }
}
