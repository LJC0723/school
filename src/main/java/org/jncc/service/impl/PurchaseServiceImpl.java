package org.jncc.service.impl;

import org.jncc.Utils.ConstErrorCode;
import org.jncc.cause.ResultCause;
import org.jncc.dao.PublishDao;
import org.jncc.dao.PurchaseDao;
import org.jncc.entity.PurchaseEntity;
import org.jncc.service.PublishService;
import org.jncc.service.PurchaseService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Mr on 2018/12/30.
 */
@Service("purchaseService")
public class PurchaseServiceImpl implements PurchaseService {
    @Resource(name = "purchaseDao")
    private PurchaseDao purchaseDao;

    @Override
    public ResultCause addPurchase(PurchaseEntity purchase) {
        ResultCause result = new ResultCause();
        String sql = "insert into purchase (purchase_id,order_id,community_id,comment,publisher_id,purchase_time) values (:purchaseId,:orderId,:communityId,:comment,:publisherId,:purchaseTime)";
        purchaseDao.save(sql,purchase);
        result.setCause(ConstErrorCode.SUCCESS_CODE,"");
        return result;
    }

    @Override
    public ResultCause updatePurchase(int id) {
        ResultCause result = new ResultCause();
        String sql="delete from purchase where order_id = ?";
        purchaseDao.update(sql,id);
        result.setCause("200","");
        return result;
    }

    @Override
    public ResultCause updatePurchase(PurchaseEntity purchase) {
        ResultCause result = new ResultCause();
        String sql="update purchase set order_id=?,community_id=?,comment=?,publisher_id=?,purchase_time=? where purchase_id="+purchase.getPurchaseId()+"";
        purchaseDao.update(sql,purchase);
        result.setCause("200","");
        return result;
    }

    @Override
    public List<PurchaseEntity> getPurchase() {
        String sql="select * from purchase";
        return purchaseDao.listPurchasers(sql);
    }

    @Override
    public List<PurchaseEntity> getUserByCount() {
        return null;
    }
}
