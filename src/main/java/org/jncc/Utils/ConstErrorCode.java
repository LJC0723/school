package org.jncc.Utils;

public class ConstErrorCode {

    //resultCode
    public final static String SUCCESS_CODE = "200";
    public final static String NOT_FIND_ERROR = "400";
    public final static String PROCESS_ERROR = "401";

    //resultDesc
    //忘记密码以及账号已注册的待修改
    public final static String OLD_PASSWORD_ERROR = "原密码错误";
    public final static String PHONE_IS_EXISTED = "用户已被注册";
    public final static String CHECK_TOKEN_ERROR = "验证码错误";
    public final static String PHONE_IS_LOCKED = "账户已锁定";
    public final static String PHONE_IS_NOT_CONFIRMED = "未验证";
    public final static String PHONE_IS_NOT_EXISTED ="用户不存在";
    public final static String PHONE_IS_NOT_ACTIVATE = "账号未激活";
    public final static String LOGIN_ERROR = "账号或密码错误";
}
