package com.gmail.amalcaraz89.advertising.model;

import java.math.BigInteger;

public class Advertisement {

    private long id;
    private BigInteger price;
    private String text;
    private String background;

    public Advertisement(long id, BigInteger price, String text, String background) {
        this.id = id;
        this.price = price;
        this.text = text;
        this.background = background;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public BigInteger getPrice() {
        return price;
    }

    public void setPrice(BigInteger price) {
        this.price = price;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getBackground() {
        return background;
    }

    public void setBackground(String background) {
        this.background = background;
    }

    @Override
    public String toString() {
        return "{" +
                "\"id\": " + id +
                ", \"price\": " + price +
                ", \"text\": \"" + text + "\"" +
                ", \"background\": \"" + background + "\"" +
                "}";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Advertisement that = (Advertisement) o;

        if (id != that.id) return false;
        if (price != null ? !price.equals(that.price) : that.price != null) return false;
        if (text != null ? !text.equals(that.text) : that.text != null) return false;
        return background != null ? background.equals(that.background) : that.background == null;
    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + (price != null ? price.hashCode() : 0);
        result = 31 * result + (text != null ? text.hashCode() : 0);
        result = 31 * result + (background != null ? background.hashCode() : 0);
        return result;
    }
}
