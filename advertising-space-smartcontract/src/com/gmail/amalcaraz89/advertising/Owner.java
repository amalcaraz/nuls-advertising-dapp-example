package com.gmail.amalcaraz89.advertising;

import io.nuls.contract.sdk.Address;
import io.nuls.contract.sdk.Msg;

import static io.nuls.contract.sdk.Utils.*;

class Owner {

    protected Address owner;

    Owner() { owner = Msg.sender(); }

    protected boolean isOwner() {
        return Msg.sender().equals(owner);
    }

    protected void requireOwner() { require(isOwner(), "Sender is not owner"); }

}
