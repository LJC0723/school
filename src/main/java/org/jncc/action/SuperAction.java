package org.jncc.action;


import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SuperAction extends ActionSupport implements ServletRequestAware, ServletResponseAware {


    protected  HttpServletRequest request;
    protected  HttpServletResponse  response;

    @Override
    public void setServletRequest(HttpServletRequest httpServletRequest) {
            this.request = httpServletRequest;
    }

    @Override
    public void setServletResponse(HttpServletResponse httpServletResponse) {
          this.response = httpServletResponse;
    }
    public HttpServletRequest getServletRequest() {
        return this.request;
    }
}
