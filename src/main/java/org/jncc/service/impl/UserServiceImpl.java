package org.jncc.service.impl;


import org.jncc.Utils.ConstErrorCode;
import org.jncc.cause.ResultCause;
import org.jncc.dao.UserDao;
import org.jncc.entity.UserEntity;
import org.jncc.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("userService")
public class UserServiceImpl implements UserService {
    @Resource(name = "userDao")
     private UserDao userDao;

    @Override
    public ResultCause addUser(UserEntity user){
        ResultCause result = new ResultCause();
        String sql = "select * from user where username = ?";
        List<UserEntity> userEntities = userDao.listUsers(sql,user.getUsername());
        if (userEntities != null && userEntities.size() > 0){
            result.setCause(ConstErrorCode.NOT_FIND_ERROR,ConstErrorCode.PHONE_IS_EXISTED);
            return result;
        }
//        user.setState(0);
//        user.setRole("0");
        //手机号查重
        //if (phoneExist(user.getUsername())){
        //    result.setCause(ConstErrorCode.NOT_FIND_ERROR,ConstErrorCode.PHONE_IS_EXISTED);
        //    return result;
        //}
        sql = "insert into user (username,password,account,role) values (:username,:password,:account,0)";
        userDao.save(sql,user);
        result.setCause(ConstErrorCode.SUCCESS_CODE,"");
        return result;
    }

    @Override
    public ResultCause updatePassword(UserEntity user,String password){
        ResultCause result = new ResultCause();
        String sql1 = "select * from user where username = ?";
        List<UserEntity> userEntities = userDao.listUsers(sql1,user.getUsername());
        if(userEntities.get(0).getPassword().equals(password)&&password.equals(userEntities.get(0).getPassword())){
            String sql = "update user set password=? where username=?";
            userDao.update(sql, user.getUsername(), user.getPassword());
            result.setCause("200", "");
        } else{
            result.setCause("400", ConstErrorCode.OLD_PASSWORD_ERROR );
        }
        return result;
    }

    @Override
    public ResultCause updateUser(UserEntity user) {
        ResultCause result = new ResultCause();
        String sql="update user set account=?,username=?,password=?,role=? where id="+user.getId()+"";
        userDao.update(sql,user);
        result.setCause("200","");
        return result;
    }

    @Override
    public ResultCause updateState(UserEntity user){
        ResultCause result = new ResultCause();
        String sql = "update user set state= 1 where username=?";
        userDao.update(sql,user.getUsername());

        result.setCause("200","");
        return result;
    }

    @Override
    public ResultCause updateCount(UserEntity user){
        ResultCause result = new ResultCause();
        String sql = "update user set count=? where username=?";
        //userDao.update(sql,user.getCount(),user.getUsername());
        result.setCause("200","");
        return result;
    }

    @Override
    public ResultCause deleteUser(int id) {
        ResultCause result = new ResultCause();
        String sql="delete from user where id = ?";
        userDao.update(sql,id);
        result.setCause("200","");
        return result;
    }

    @Override
    public List<UserEntity> getUser(){
        String sql="select * from user";
        return userDao.listUsers(sql);
    }

    @Override
    public List<UserEntity> getUserByCount(){
        String sql="select * from user where state=0";
        return userDao.listUsers(sql);
    }

    private boolean getTargetUser(String userName){
        String sql = "select * from user where username = ?";
        List<UserEntity> userEntities = userDao.listUsers(sql,userName);
        if (userEntities == null || userEntities.size() == 0){
            return false;
        }
        return true;
        //return (userEntities!=null&&userEntities.size()>0)?userEntities.get(0):null;
    }

    private boolean phoneExist(String userName){
        String sql = "select userName from user where phone = ?";
        List<UserEntity> userEntities = userDao.listUsers(sql,userName);
        if (userEntities == null || userEntities.size() == 0){
            return false;
        }
        return true;
    }

    @Override
    public ResultCause login(UserEntity user) {
        ResultCause result = new ResultCause();
        String sql = "select * from user where username = ?";
        List<UserEntity> userEntities = userDao.listUsers(sql,user.getUsername());
        if (userEntities == null || userEntities.size() == 0){
            result.setCause(ConstErrorCode.NOT_FIND_ERROR,ConstErrorCode.PHONE_IS_NOT_EXISTED);
            return result;
        }else if (userEntities.get(0).getPassword() == null || !userEntities.get(0).getPassword().equals(user.getPassword())){
            result.setCause(ConstErrorCode.NOT_FIND_ERROR,ConstErrorCode.LOGIN_ERROR);
            return result;
        }else if (userEntities.get(0).getPassword().equals(user.getPassword())){
//            String sqlUp = "update user set last_login_time = ? where phone = ?";
//            userDao.updateUser(sqlUp,new Object[]{new UtilTools().getTime(),user.getUsername()});
            result.setCause(ConstErrorCode.SUCCESS_CODE,"");
//            user.setName(userEntities.get(0).getName());
            return result;
        }
        result.setCause(ConstErrorCode.NOT_FIND_ERROR,ConstErrorCode.LOGIN_ERROR);
        return result;
    }

    @Override
    public List<UserEntity> getUser(String username){
        String sql="select * from user where username=?";
        return userDao.listUsers(sql,username);
    }

}
