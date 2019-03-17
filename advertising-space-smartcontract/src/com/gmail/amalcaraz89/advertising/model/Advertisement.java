package com.gmail.amalcaraz89.advertising.model;

import io.nuls.contract.sdk.Address;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Advertisement {

    public static Advertisement fromString(String str, Address provider) {

        Advertisement ad = new Advertisement();

        // remove curly brackets
        str = str.substring(1, str.length()-1);

        // Split into object properties separated by ',"'
        String[] keyValuePairs = str.split(",( ?)(?=\")");
        Map<String, String> map = new HashMap<>();

        for (String pair : keyValuePairs) {

            // Split into key and value separated by '":'
            String[] entry = pair.split("(?<=\")( ?):");

            // Remove JSON double quotes in keys
            String k = entry[0].trim();
            k = k.substring(1, k.length()-1);

            // Remove JSON double quotes in value
            String v = entry[1].trim();
            v = v.startsWith("\"") ? v.substring(1, v.length()-1) : v;

            map.put(k, v);

        }

        ad.setId(Long.parseLong(map.get("id")));
        ad.setPrice(new BigInteger(map.get("price")));
        ad.setText(map.get("text"));
        ad.setBackground(map.get("background"));
        ad.setProvider(provider);

        return ad;

    }

    public static List<Advertisement> listFromString(String str, Address provider) {

        List<Advertisement> advertisementList = new ArrayList<>();

        // remove array brackets
        str = str.substring(1, str.length()-1);

        // Empty array?
        if (str.length() > 0) {

            // Split into items objects {} separated by ","
            String[] items = str.split("(?<=}),( ?)(?=\\{)");

            for (String item : items) {

                advertisementList.add(fromString(item, provider));

            }

        }

        return advertisementList;

    }

    private long id;
    private BigInteger price;
    private String text;
    private String background;
    private Address provider;

    public Advertisement() {
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

    public Address getProvider() {
        return provider;
    }

    public void setProvider(Address provider) {
        this.provider = provider;
    }

    @Override
    public String toString() {
        return "{" +
                "\"id\": " + id +
                ", \"price\": " + price +
                ", \"text\": \"" + text + "\"" +
                ", \"background\": \"" + background + "\"" +
                ", \"provider\": \"" + provider + "\"" +
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
        if (background != null ? !background.equals(that.background) : that.background != null) return false;
        return provider != null ? provider.equals(that.provider) : that.provider == null;
    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + (price != null ? price.hashCode() : 0);
        result = 31 * result + (text != null ? text.hashCode() : 0);
        result = 31 * result + (background != null ? background.hashCode() : 0);
        result = 31 * result + (provider != null ? provider.hashCode() : 0);
        return result;
    }
}
