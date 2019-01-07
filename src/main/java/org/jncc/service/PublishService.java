package org.jncc.service;

import org.jncc.cause.ResultCause;
import org.jncc.entity.CommunityEntity;
import org.jncc.entity.PublishEntity;
import org.jncc.entity.UserEntity;

import java.util.List;

/**
 * Created by Mr on 2018/12/30.
 */
public interface PublishService {
    public ResultCause addPublish(PublishEntity publish);
    public ResultCause updatePublish(int id);
    public ResultCause updatePublish(PublishEntity publish);
    public List<PublishEntity> getPublish();
    public List<PublishEntity> getUserByCount();
}
