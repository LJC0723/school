package org.jncc.action;


import org.apache.struts2.ServletActionContext;
import org.jncc.cause.ResultCause;
import org.jncc.entity.UserEntity;
import org.jncc.service.UserService;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;


@Controller("userAction")
@Scope("prototype")
public class UserAction {
    private int id;
    private UserEntity user;
    private ResultCause result = new ResultCause();
    private int flag;
    private String username;
    @Resource(name="userService")
    private UserService userService;
    private List<UserEntity> userEntities;
    private String password;
    /**
     * 修改密码
     * user 需含 phone ,password
     * @return
     */
    public String password(){
        result = userService.updatePassword(user,password);
        return "LOGIN_SUCCESS";
    }
    /**
     * 激活
     * user 需含 username
     * @return
     */
    public String active(){
        result = userService.updateState(user);
        return "LOGIN_SUCCESS";
    }
    /**
     * 注册
     * user 需含 username,password
     * @return
     */
    public String register(){
        result = userService.addUser(user);
        return "LOGIN_SUCCESS";
    }


    public String deleteUser(){
        result = userService.deleteUser(id);
        return "LOGIN_SUCCESS";
    }

    public String getUserList(){
        userEntities=userService.getUser();
        return "GET_USER_SUCCESS";
    }

    /**
     * 登录
     * user 需含 username ,password
     * @return
     */
    public String login()
            //throws IOException
    {
//        HttpServletRequest request = ServletActionContext.getRequest();
//        HttpServletResponse response = ServletActionContext.getResponse();
//        HttpSession session = request.getSession();
        result = userService.login(user);
//       if(result.getResultCode().equals("200")){
//            session.setAttribute(session.getId(),user.getName());
//            session.setAttribute(user.getName(),user);
//            Cookie cookiePh = new Cookie("tun_usrname",user.getUsername());
//            Cookie cookiePa = new Cookie("tun_psswd",user.getPassword());
//            Cookie cookieFlag = new Cookie("check_flag","true");
//            if (flag == 1){
//                cookiePh.setMaxAge(ConstContent.COOKIE_MAX_AGE);
//                cookiePa.setMaxAge(ConstContent.COOKIE_MAX_AGE);
//                cookieFlag.setMaxAge(ConstContent.COOKIE_MAX_AGE);
//            }else {
//                cookiePh.setMaxAge(ConstContent.COOKIE_DELETE_AGE);
//                cookiePa.setMaxAge(ConstContent.COOKIE_DELETE_AGE);
//                cookieFlag.setMaxAge(ConstContent.COOKIE_DELETE_AGE);
//            }
//            response.addCookie(cookiePh);
//            response.addCookie(cookiePa);
//            response.addCookie(cookieFlag);
//        }else {
//            session.removeAttribute(user.getName());
//            session.removeAttribute(session.getId());
//        }
        return "LOGIN_SUCCESS";
    }

    public String updateUser(){
        result = userService.updateUser(user);
        return "LOGIN_SUCCESS";
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public int getFlag() {
        return flag;
    }

    public void setFlag(int flag) {
        this.flag = flag;
    }

    public ResultCause getResult() {
        return result;
    }

    public void setResult(ResultCause result) {
        this.result = result;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public UserService getUserService() {
        return userService;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<UserEntity> getUserEntities() {
        return userEntities;
    }

    public void setUserEntities(List<UserEntity> userEntities) {
        this.userEntities = userEntities;
    }
}
