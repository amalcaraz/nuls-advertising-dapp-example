package com.gmail.amalcaraz89.advertising;

import com.gmail.amalcaraz89.advertising.model.Advertisement;

import io.nuls.contract.sdk.*;
import io.nuls.contract.sdk.annotation.*;
import static io.nuls.contract.sdk.Utils.*;

import java.math.BigInteger;
import java.util.*;

public class AdvertisingProviderContract extends Owner implements AdvertisingProvider, Contract {

    /**
     * Store all the Advertisement objects of the provider, identified by their Id (a timestamp)
     */
    private Map<Long, Advertisement> advertisements = new HashMap<>();

    /**
     * Store a set of the advertisement-spaces where our provider are registered
     */
    private Set<Address> advertisementSpaces = new HashSet<>();


    /**
     * TODO: Implement the whole AdvertisingProvider interface:
     * - registerIntoSpace
     * - addAd
     * - viewAds
     * - printAd
     */


    @Payable
    public void removeAd(@Required long id) {

        requireOwner();

        Advertisement ad = advertisements.get(id);

        require(ad != null, "Ad not found");

        advertisements.remove(id);
        Msg.sender().transfer(ad.getPrice());

    }

    @View
    public Set<Address> viewSpaces() {

        return advertisementSpaces;

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
