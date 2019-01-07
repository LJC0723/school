package org.jncc.service;

import org.jncc.cause.ResultCause;
import org.jncc.entity.CommunityEntity;

import java.util.List;

/**
 * Created by Mr on 2018/12/3.
 */
public interface CommunityService {
    public ResultCause addCommunity(CommunityEntity community);
    public ResultCause updateState(int id);
    public ResultCause updateState(CommunityEntity community);
    public List<CommunityEntity> getCommunityList();
}
