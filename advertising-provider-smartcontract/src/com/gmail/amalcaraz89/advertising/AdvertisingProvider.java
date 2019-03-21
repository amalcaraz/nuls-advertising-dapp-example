package com.gmail.amalcaraz89.advertising;

import com.gmail.amalcaraz89.advertising.model.Advertisement;
import io.nuls.contract.sdk.Address;

import java.util.List;

/**
 * We need to implement this interface in order to integrate
 * our provider with some advertisement-space smart contract
 */
public interface AdvertisingProvider {

    /**
     * Register our contract Address as a new provider in the advertisement-space
     * contract identified by the given Address as first argument
     *
     * @param spaceAddress Address of the advertisement-space where the provider will be registered (Required)
     */
    void registerIntoSpace(Address spaceAddress);

    /**
     * Creates and save a new Advertisement object in the Advertisements collection of this provider.
     * The Advertisement price will be set as the total amount sent to the contract by calling this method
     * and it should greater or equal than 1 NULS.
     * The Advertisement id will be set as the timestamp of the current Block
     *
     * @param text The text that will be show in the advertisement-space (Required)
     * @param background It can be an hexadecimal code of color (#ffffff) or an url to some png or jpg image
     * @return The id of the Advertisement object (a timestamp)
     */
    long addAd(String text, String background);

    /**
     * Lists all created Advertisements
     * If the provider doesn't has any Advertisement, an empty list will be returned
     *
     * IMPORTANT! This method must never throw an exception
     *
     * @return A list of all stored Advertisement objects (or an empty list)
     */
    List<Advertisement> viewAds();

    /**
     * Removes an Advertisement object from the Advertisements collection of this provider, and transfers to the
     * advertisement-space contract an amount of NULS equals to the price set for this Ad when it was created
     * Ensure that this method will be only callable by one of the advertisement-spaces in which this provider is registered
     *
     * IMPORTANT! This method must never throw an exception
     *
     * @param id The id of the advertisement that is consumed by the advertisement-space
     *
     */
    void printAd(long id);

}
