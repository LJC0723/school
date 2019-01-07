package org.jncc.service.impl;

import org.jncc.Utils.ConstErrorCode;
import org.jncc.cause.ResultCause;
import org.jncc.dao.CommunityDao;
import org.jncc.entity.CommunityEntity;
import org.jncc.service.CommunityService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Mr on 2018/12/3.
 */
@Service("communityService")
public class CommunityServiceImpl implements CommunityService {
    @Resource(name = "communityDao")
    private CommunityDao communityDao;

    //增加商品信息
    @Override
    public ResultCause addCommunity(CommunityEntity community){
        ResultCause result = new ResultCause();
        String sql = "insert into community (goods_id,goods_name,goods_price,goods_number,goods_publisher) values (:goodsId,:goodsName,:goodsPrice,:goodsNumber,:goodsPublisher)";
        communityDao.save(sql,community);
        result.setCause(ConstErrorCode.SUCCESS_CODE,"");
        return result;
    }

    //修改商品信息
    @Override
    public ResultCause updateState(CommunityEntity community){
        ResultCause result = new ResultCause();
        String sql="update community set goods_name=?,goods_price=?,goods_number=?,goods_publisher=? where goods_id="+community.getGoodsId()+"";
        communityDao.update(sql,community);
        result.setCause("200","");
        return result;
    }

    //删除商品信息
    @Override
    public ResultCause updateState(int id) {
        ResultCause result = new ResultCause();
        String sql="delete from community where goods_id = ?";
        communityDao.update(sql,id);
        result.setCause("200","");
        return result;
    }

    //商品信息列表
    @Override
    public List<CommunityEntity> getCommunityList(){
        String sql="select * from community";
        return communityDao.listCommunity(sql);
    }
}
