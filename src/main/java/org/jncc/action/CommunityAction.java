package org.jncc.action;

import org.jncc.cause.ResultCause;
import org.jncc.entity.CommunityEntity;
import org.jncc.service.CommunityService;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Mr on 2018/12/3.
 */
@Controller("communityAction")
@Scope("prototype")
public class CommunityAction {
    //private int flag;
    private String username;
    private int id;
    private CommunityEntity community;
    @Resource(name = "communityService")
    private CommunityService communityService;
    private List<CommunityEntity> communityEntities;
    private ResultCause result = new ResultCause();

    public String addCommunity(){
        result = communityService.addCommunity(community);
        return "LOGIN_SUCCESS";
    }

    public String deleteCommunity(){
        result = communityService.updateState(id);
        return "LOGIN_SUCCESS";
    }

    public String updateCommunity(){
        result = communityService.updateState(community);
        return "LOGIN_SUCCESS";
    }

    public String getCommunityList(){
        communityEntities = communityService.getCommunityList();
        return "GET_COMMUNITY_SUCCESS";
    }


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public CommunityEntity getCommunity() {
        return community;
    }

    public void setCommunity(CommunityEntity community) {
        this.community = community;
    }

    public CommunityService getCommunityService() {
        return communityService;
    }

    public void setCommunityService(CommunityService communityService) {
        this.communityService = communityService;
    }

    public List<CommunityEntity> getCommunityEntities() {
        return communityEntities;
    }

    public void setCommunityEntities(List<CommunityEntity> communityEntities) {
        this.communityEntities = communityEntities;
    }

    public ResultCause getResult() {
        return result;
    }

    public void setResult(ResultCause result) {
        this.result = result;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
