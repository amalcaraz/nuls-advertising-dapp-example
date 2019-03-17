package com.gmail.amalcaraz89.advertising;

import com.gmail.amalcaraz89.advertising.model.Advertisement;
import io.nuls.contract.sdk.Address;
import io.nuls.contract.sdk.Contract;

import io.nuls.contract.sdk.Msg;
import io.nuls.contract.sdk.annotation.Payable;
import io.nuls.contract.sdk.annotation.Required;
import io.nuls.contract.sdk.annotation.View;

import static io.nuls.contract.sdk.Utils.*;

import java.math.BigInteger;
import java.util.*;

public class AdvertisingSpaceContract extends Owner implements Contract {

    private Set<Address> advertisementProviders = new HashSet<>();
    private Advertisement currentAd;

    @Override
    @Payable
    public void _payable() {

    }

    @Payable
    public void updateAd() {

        requireOwner();
        require(advertisementProviders.size() > 0 || currentAd != null, "Update not needed");

        List<Advertisement> ads = new ArrayList<>();

        for (Address provider : advertisementProviders) {

            // Exceptions thrown in the called contract can not be catch here, be sure this method returns null | value
            String returnedValue = provider.callWithReturnValue("viewAds", "", null, BigInteger.ZERO);

            try {

                List<Advertisement> adsFromProvider = Advertisement.listFromString(returnedValue, provider);
                ads.addAll(adsFromProvider);

            } catch (Exception ignored) { }

        }

        while (!ads.isEmpty()) {

            Advertisement ad = getMostProfitableAd(ads);

            BigInteger preBalance = Msg.address().balance();

            try {

                String[][] args = new String[][]{{String.valueOf(ad.getId())}};
                ad.getProvider().call("printAd", "", args, BigInteger.ZERO);

            } catch (Exception ignored) { }

            BigInteger postBalance = Msg.address().balance();

            if (postBalance.subtract(preBalance).compareTo(ad.getPrice()) >= 0) {

                currentAd = ad;
                return;

            } else {

                ads.remove(ad);

            }

        }

        require(currentAd != null, "Update not needed");

        currentAd = null;

    }

    @Payable
    public void registerProvider(@Required Address providerAddress) {

        require(Msg.sender().equals(providerAddress), "A provider must be registered by itself");
        require(!advertisementProviders.contains(providerAddress), "Provider already registered");

        advertisementProviders.add(providerAddress);

    }

    @Payable
    public void unregisterProvider(@Required Address providerAddress) {

        require(Msg.sender().equals(providerAddress) || isOwner(), "A provider must be unregistered by itself or by owner");
        require(advertisementProviders.contains(providerAddress), "Provider is not registered");

        advertisementProviders.remove(providerAddress);

    }

    @View
    public Advertisement viewCurrentAd() {

       return currentAd;

    }

    @View
    public Set<String> viewProviders() {

        Set<String> ret = new HashSet<>();

        for (Address provider : advertisementProviders) {
            ret.add("\"" + provider + "\"");
        }

        return ret;

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

    private Advertisement getMostProfitableAd(List<Advertisement> adList) {

        Advertisement profitableAd = adList.get(0);

        for (Advertisement ad : adList) {

            if (ad.getPrice().compareTo(profitableAd.getPrice()) > 0) {
                profitableAd = ad;
            }
        }

        return profitableAd;

    }

}
