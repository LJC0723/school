package org.jncc.service;


import org.jncc.cause.ResultCause;
import org.jncc.entity.UserEntity;

import java.util.List;

public interface UserService {
    /**
     * 登录
     * @param user  set phone + password
     * @return
     */
    public ResultCause login(UserEntity user);
    /**
     * 注册
     * @param user  set username + password
     * @return
     */
    public ResultCause addUser(UserEntity user);
    /**
     * 修改密码
     * @param user  set username + password
     * @return
     */
    public ResultCause updatePassword(UserEntity user,String password);
    public ResultCause updateUser(UserEntity user);
    /**
     * 激活
     * @param
     * @return
     */
    public ResultCause updateState(UserEntity user);
    public ResultCause updateCount(UserEntity user);

    public ResultCause deleteUser(int id);
    public List<UserEntity> getUser();
    public List<UserEntity> getUserByCount();
    public List<UserEntity> getUser(String username);
}
