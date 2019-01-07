package org.jncc.entity;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by Mr on 2019/1/2.
 */
@Entity
@Table(name = "orders", schema = "school", catalog = "")
public class OrdersEntity {
    private int orderId;
    private Integer communityId;
    private Integer publisherId;
    private Integer customerId;
    private Integer communityNumber;
    private Double orderSum;
    private Integer orderState;
    private Timestamp orderTime;

    @Id
    @Column(name = "order_id", nullable = false)
    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
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
    @Column(name = "customer_id", nullable = true)
    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    @Basic
    @Column(name = "community_number", nullable = true)
    public Integer getCommunityNumber() {
        return communityNumber;
    }

    public void setCommunityNumber(Integer communityNumber) {
        this.communityNumber = communityNumber;
    }

    @Basic
    @Column(name = "order_sum", nullable = true, precision = 0)
    public Double getOrderSum() {
        return orderSum;
    }

    public void setOrderSum(Double orderSum) {
        this.orderSum = orderSum;
    }

    @Basic
    @Column(name = "order_state", nullable = true)
    public Integer getOrderState() {
        return orderState;
    }

    public void setOrderState(Integer orderState) {
        this.orderState = orderState;
    }

    @Basic
    @Column(name = "order_time", nullable = true)
    public Timestamp getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(Timestamp orderTime) {
        this.orderTime = orderTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        OrdersEntity that = (OrdersEntity) o;

        if (orderId != that.orderId) return false;
        if (communityId != null ? !communityId.equals(that.communityId) : that.communityId != null) return false;
        if (publisherId != null ? !publisherId.equals(that.publisherId) : that.publisherId != null) return false;
        if (customerId != null ? !customerId.equals(that.customerId) : that.customerId != null) return false;
        if (communityNumber != null ? !communityNumber.equals(that.communityNumber) : that.communityNumber != null)
            return false;
        if (orderSum != null ? !orderSum.equals(that.orderSum) : that.orderSum != null) return false;
        if (orderState != null ? !orderState.equals(that.orderState) : that.orderState != null) return false;
        if (orderTime != null ? !orderTime.equals(that.orderTime) : that.orderTime != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = orderId;
        result = 31 * result + (communityId != null ? communityId.hashCode() : 0);
        result = 31 * result + (publisherId != null ? publisherId.hashCode() : 0);
        result = 31 * result + (customerId != null ? customerId.hashCode() : 0);
        result = 31 * result + (communityNumber != null ? communityNumber.hashCode() : 0);
        result = 31 * result + (orderSum != null ? orderSum.hashCode() : 0);
        result = 31 * result + (orderState != null ? orderState.hashCode() : 0);
        result = 31 * result + (orderTime != null ? orderTime.hashCode() : 0);
        return result;
    }
}
