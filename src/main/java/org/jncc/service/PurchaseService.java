package org.jncc.service;

import org.jncc.cause.ResultCause;
import org.jncc.entity.PurchaseEntity;

import java.util.List;

/**
 * Created by Mr on 2018/12/30.
 */
public interface PurchaseService {
    public ResultCause addPurchase(PurchaseEntity purchase);
    public ResultCause updatePurchase(int id);
    public ResultCause updatePurchase(PurchaseEntity purchase);
    public List<PurchaseEntity> getPurchase();
    public List<PurchaseEntity> getUserByCount();
}
