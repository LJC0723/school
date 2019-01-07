package org.jncc.action;

import org.jncc.cause.ResultCause;
import org.jncc.entity.PublishEntity;
import org.jncc.service.OrderService;
import org.jncc.service.PublishService;
import org.jncc.service.PurchaseService;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Mr on 2018/12/30.
 */
@Controller("publishAction")
@Scope("prototype")
public class PublishAction {
    @Resource(name="publishService")
    private PublishService publishService;
    private ResultCause result = new ResultCause();
    private PublishEntity publish;
    private List<PublishEntity> publishEntities;
    private int id;

    public String addPublish(){
        result = publishService.addPublish(publish);
        return "LOGIN_SUCCESS";
    }

    public String deletePublish(){
        result = publishService.updatePublish(id);
        return "LOGIN_SUCCESS";
    }

    public String updatePublish(){
        result = publishService.updatePublish(publish);
        return "LOGIN_SUCCESS";
    }

    public String getPublishList(){
        publishEntities = publishService.getPublish();
        return "GET_PUBLISH_SUCCESS";
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public PublishService getPublishService() {
        return publishService;
    }

    public void setPublishService(PublishService publishService) {
        this.publishService = publishService;
    }

    public ResultCause getResult() {
        return result;
    }

    public void setResult(ResultCause result) {
        this.result = result;
    }

    public PublishEntity getPublish() {
        return publish;
    }

    public void setPublish(PublishEntity publish) {
        this.publish = publish;
    }

    public List<PublishEntity> getPublishEntities() {
        return publishEntities;
    }

    public void setPublishEntities(List<PublishEntity> publishEntities) {
        this.publishEntities = publishEntities;
    }
}
