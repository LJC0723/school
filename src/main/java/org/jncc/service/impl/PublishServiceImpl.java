package org.jncc.service.impl;

import org.jncc.Utils.ConstErrorCode;
import org.jncc.cause.ResultCause;
import org.jncc.dao.PublishDao;
import org.jncc.dao.UserDao;
import org.jncc.entity.PublishEntity;
import org.jncc.service.PublishService;
import org.jncc.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Mr on 2018/12/30.
 */
@Service("publishService")
public class PublishServiceImpl implements PublishService {
    @Resource(name = "publishDao")
    private PublishDao publishDao;

    @Override
    public ResultCause addPublish(PublishEntity publish) {
        ResultCause result = new ResultCause();
        String sql = "insert into publish (publisher_id,community_id,publish_time,price,number,state) values (:publisherId,:communityId,:publishTime,:price,:number,:state)";
        publishDao.save(sql,publish);
        result.setCause(ConstErrorCode.SUCCESS_CODE,"");
        return result;
    }

    @Override
    public ResultCause updatePublish(int id) {
        ResultCause result = new ResultCause();
        String sql="delete from publish where id = ?";
        publishDao.update(sql,id);
        result.setCause("200","");
        return result;
    }

    @Override
    public ResultCause updatePublish(PublishEntity publish) {
        ResultCause result = new ResultCause();
        String sql="update publish set community_id=?,publish_time=?,price=?,number=?,state=? where publisher_id="+publish.getId()+"";
        publishDao.update(sql,publish);
        result.setCause("200","");
        return result;
    }

    @Override
    public List<PublishEntity> getPublish() {
        String sql="select * from publish";
        return publishDao.listPublishers(sql);
    }

    @Override
    public List<PublishEntity> getUserByCount() {
        return null;
    }
}
