package org.jncc.entity;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by Mr on 2019/1/2.
 */
@Entity
@Table(name = "purchase", schema = "school", catalog = "")
public class PurchaseEntity {
    private String comment;
    private int purchaseId;
    private Integer orderId;
    private Integer communityId;
    private Integer publisherId;
    private Timestamp purchaseTime;

    @Basic
    @Column(name = "comment", nullable = true, length = 64)
    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @Id
    @Column(name = "purchase_id", nullable = false)
    public int getPurchaseId() {
        return purchaseId;
    }

    public void setPurchaseId(int purchaseId) {
        this.purchaseId = purchaseId;
    }

    @Basic
    @Column(name = "order_id", nullable = true)
    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    @Basic
    @Column(name = "community_id", nullable = true)
    public Integer getCommunityId() {
        return communityId;
    }

    public void setCommunityId(Integer communityId) {
        this.communityId = communityId;
    }

    @Basic
    @Column(name = "publisher_id", nullable = true)
    public Integer getPublisherId() {
        return publisherId;
    }

    public void setPublisherId(Integer publisherId) {
        this.publisherId = publisherId;
    }

    @Basic
    @Column(name = "purchase_time", nullable = true)
    public Timestamp getPurchaseTime() {
        return purchaseTime;
    }

    public void setPurchaseTime(Timestamp purchaseTime) {
        this.purchaseTime = purchaseTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PurchaseEntity that = (PurchaseEntity) o;

        if (purchaseId != that.purchaseId) return false;
        if (comment != null ? !comment.equals(that.comment) : that.comment != null) return false;
        if (orderId != null ? !orderId.equals(that.orderId) : that.orderId != null) return false;
        if (communityId != null ? !communityId.equals(that.communityId) : that.communityId != null) return false;
        if (publisherId != null ? !publisherId.equals(that.publisherId) : that.publisherId != null) return false;
        if (purchaseTime != null ? !purchaseTime.equals(that.purchaseTime) : that.purchaseTime != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = comment != null ? comment.hashCode() : 0;
        result = 31 * result + purchaseId;
        result = 31 * result + (orderId != null ? orderId.hashCode() : 0);
        result = 31 * result + (communityId != null ? communityId.hashCode() : 0);
        result = 31 * result + (publisherId != null ? publisherId.hashCode() : 0);
        result = 31 * result + (purchaseTime != null ? purchaseTime.hashCode() : 0);
        return result;
    }
}
