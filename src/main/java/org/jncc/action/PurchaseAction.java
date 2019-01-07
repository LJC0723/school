package org.jncc.action;

import org.jncc.cause.ResultCause;
import org.jncc.entity.PurchaseEntity;
import org.jncc.service.PublishService;
import org.jncc.service.PurchaseService;
import org.jncc.service.UserService;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Mr on 2018/12/30.
 */
@Controller("purchaseAction")
@Scope("prototype")
public class PurchaseAction {
    @Resource(name="purchaseService")
    private PurchaseService purchaseService;

    private int id;
    private ResultCause result = new ResultCause();
    private PurchaseEntity purchase;
    private List<PurchaseEntity> purchaseEntities;

    public String addPurchase(){
        result = purchaseService.addPurchase(purchase);
        return "LOGIN_SUCCESS";
    }

    public String deletePurchase(){
        result = purchaseService.updatePurchase(id);
        return "LOGIN_SUCCESS";
    }

    public String updatePurchase(){
        result = purchaseService.updatePurchase(purchase);
        return "LOGIN_SUCCESS";
    }

    public String getPurchaseList(){
        purchaseEntities = purchaseService.getPurchase();
        return "GET_PURCHASE_SUCCESS";
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public PurchaseService getPurchaseService() {
        return purchaseService;
    }

    public void setPurchaseService(PurchaseService purchaseService) {
        this.purchaseService = purchaseService;
    }

    public ResultCause getResult() {
        return result;
    }

    public void setResult(ResultCause result) {
        this.result = result;
    }

    public PurchaseEntity getPurchase() {
        return purchase;
    }

    public void setPurchase(PurchaseEntity purchase) {
        this.purchase = purchase;
    }

    public List<PurchaseEntity> getPurchaseEntities() {
        return purchaseEntities;
    }

    public void setPurchaseEntities(List<PurchaseEntity> purchaseEntities) {
        this.purchaseEntities = purchaseEntities;
    }
}
