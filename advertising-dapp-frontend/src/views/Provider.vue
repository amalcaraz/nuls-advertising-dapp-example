<template>
  <div class="provider">
    <b-container>
      <b-row>
        <b-col cols="auto">
          <h3>Provider ads list:</h3>
        </b-col>
      </b-row>
      <b-row class="mb-2" align-v="center" align-h="start" v-for="ad in ads" :key="ad.id">
        <b-col cols="auto">
          <ad-space :ad="ad" :loading="loading" :btn="false" @updateAd="onUpdate"></ad-space>
        </b-col>
        <b-col cols="auto">
          <p><strong>Id: </strong> {{ad.id}}</p>
          <p><strong>price: </strong> {{ad.price}}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { Account, Contract, AddressType, ChainIdType } from 'nuls-js';
import { clearTimeout, setInterval, clearInterval } from 'timers';
import config from 'config';
import AdSpace from '@/components/AdSpace.vue';

export default {
  name: 'provider',
  components: {
    AdSpace
  },
  data() {
    return {
      contract: null,
      ads: [],
      loading: false,
      intervalId: null,
    };
  },
  computed: {
    orderedAds() {
      return ads.sort((a, b) => a.price - b.price);
    }
  },
  async created() {

    this.loading = true;

    const contract = this.$route.query.contract;

    const contractConfig = {
      api: config.app.api.explorer,
    };

    try {

      this.contract = await Contract.at(contract, contractConfig);

      await this.viewAds();

      this.intervalId = setInterval(() => this.viewAds(), 1000 * 5);

    } catch (e) {

      alert(e);

    }

    this.loading = false;
    
  },
  destroyed() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
  methods: {
    async viewAds() {
      this.ads = await this.contract.viewAds();
    },
    onClick() {
      if (this.loading) {
        return;
      }
      this.updateAd();
    },
  },
};
</script>

<style scoped lang="scss">
#advertising-provider {
  border: 2px dotted #212529;
  min-height: 90px;
  width: 728px;
  max-width: 100%;

  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  background-size: cover;

  &.empty {
    background-image: radial-gradient(circle, #fff, #81bd39);
  }

  .btn {
    position: absolute;
    top: -2px;
    right: -2px;
    border-radius: 0 0 0 3px;
    box-shadow: none !important;
  }
}

section {
  padding: 10px 0;

  h3 {
    margin: 0.5em 0 0.8em;

    &::after {
      content: "";
      display: block;
      position: relative;
      border-bottom: 1px solid #212529;
      bottom: -0.3em;
      width: 150px;
    }
  }
}
</style>
