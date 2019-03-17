package com.gmail.amalcaraz89.advertising;

import com.gmail.amalcaraz89.advertising.model.Advertisement;

import io.nuls.contract.sdk.*;
import io.nuls.contract.sdk.annotation.*;
import static io.nuls.contract.sdk.Utils.*;

import java.math.BigInteger;
import java.util.*;

public class AdvertisingProviderContract extends Owner implements Contract {

    private Map<Long, Advertisement> advertisements = new HashMap<>();
    private Set<Address> advertisementSpaces = new HashSet<>();

    @View
    public List<Advertisement> viewAds() {

        return new ArrayList<>(advertisements.values());

    }

    @Payable
    public long addAd(@Required String text, String background) {

        requireOwner();
        require(text != null, "Text is required");

        BigInteger price = Msg.value();
        require(price.compareTo(BigInteger.ONE) >= 0, "Price must be greater than 1");

        long id = Block.currentBlockHeader().getTime();
        Advertisement ad = new Advertisement(id, price, text, background);
        advertisements.put(id, ad);

        return id;

    }

    @Payable
    public void removeAd(@Required long id) {

        requireOwner();

        Advertisement ad = advertisements.get(id);

        require(ad != null, "Ad not found");

        advertisements.remove(id);
        Msg.sender().transfer(ad.getPrice());

    }

    @Payable
    public void printAd(@Required long id) {

        require(advertisementSpaces.contains(Msg.sender()), "printAd can only be called by some advertisement space");

        Advertisement ad = advertisements.get(id);

        if (ad != null) {

            advertisements.remove(id);
            Msg.sender().transfer(ad.getPrice());

        }

    }

    @View
    public Set<String> viewSpaces() {

        Set<String> ret = new HashSet<>();

        for (Address space : advertisementSpaces) {

            ret.add("\"" + space + "\"");

        }

        return ret;

    }

    @Payable
    public void registerIntoSpace(@Required Address spaceAddress) {

        String[][] args = new String[][] {{Msg.address().toString()}};
        spaceAddress.call("registerProvider", "", args, BigInteger.ZERO);

        advertisementSpaces.add(spaceAddress);

    }

    @Payable
    public void unregisterFromSpace(@Required Address spaceAddress) {

        String[][] args = new String[][]{{Msg.address().toString()}};
        spaceAddress.call("unregisterProvider", "", args, BigInteger.ZERO);

        advertisementSpaces.remove(spaceAddress);

    }

    @View
    public BigInteger viewBalance() {

        return Msg.address().balance();

    }

    @Payable
    public void getFunds() {

        requireOwner();
        Msg.sender().transfer(Msg.address().balance());

    }

}
