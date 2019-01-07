package org.jncc.entity;

import javax.persistence.*;

/**
 * Created by Mr on 2018/12/3.
 */
@Entity
@Table(name = "community", schema = "school", catalog = "")
public class CommunityEntity {
    private int goodsId;
    private String goodsName;
    private Double goodsPrice;
    private Integer goodsNumber;
    private String goodsPublisher;

    @Id
    @Column(name = "goods_id", nullable = false)
    public int getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(int goodsId) {
        this.goodsId = goodsId;
    }

    @Basic
    @Column(name = "goods_name", nullable = true, length = 64)
    public String getGoodsName() {
        return goodsName;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }

    @Basic
    @Column(name = "goods_price", nullable = true, precision = 0)
    public Double getGoodsPrice() {
        return goodsPrice;
    }

    public void setGoodsPrice(Double goodsPrice) {
        this.goodsPrice = goodsPrice;
    }

    @Basic
    @Column(name = "goods_number", nullable = true)
    public Integer getGoodsNumber() {
        return goodsNumber;
    }

    public void setGoodsNumber(Integer goodsNumber) {
        this.goodsNumber = goodsNumber;
    }

    @Basic
    @Column(name = "goods_publisher", nullable = true, length = 64)
    public String getGoodsPublisher() {
        return goodsPublisher;
    }

    public void setGoodsPublisher(String goodsPublisher) {
        this.goodsPublisher = goodsPublisher;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CommunityEntity that = (CommunityEntity) o;

        if (goodsId != that.goodsId) return false;
        if (goodsName != null ? !goodsName.equals(that.goodsName) : that.goodsName != null) return false;
        if (goodsPrice != null ? !goodsPrice.equals(that.goodsPrice) : that.goodsPrice != null) return false;
        if (goodsNumber != null ? !goodsNumber.equals(that.goodsNumber) : that.goodsNumber != null) return false;
        if (goodsPublisher != null ? !goodsPublisher.equals(that.goodsPublisher) : that.goodsPublisher != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = goodsId;
        result = 31 * result + (goodsName != null ? goodsName.hashCode() : 0);
        result = 31 * result + (goodsPrice != null ? goodsPrice.hashCode() : 0);
        result = 31 * result + (goodsNumber != null ? goodsNumber.hashCode() : 0);
        result = 31 * result + (goodsPublisher != null ? goodsPublisher.hashCode() : 0);
        return result;
    }
}
