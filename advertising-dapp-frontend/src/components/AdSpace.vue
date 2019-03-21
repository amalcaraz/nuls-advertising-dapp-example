<template>
  <div class="ad-space" :class="{'empty': !ad}" :style="advertisingStyle">
    <span>{{advertisingText}}</span>
    <b-button v-if="showBtn" class="btn" size="sm" @click="onClick">{{loading ? '...' : 'Update'}}</b-button>
  </div>
</template>

<script>
import { Account, Contract, AddressType, ChainIdType } from 'nuls-js';
import config from 'config';

export default {
  name: 'Space',
  props: ['ad', 'loading', 'btn'],
  computed: {
    showBtn() {
      return this.btn === undefined ? true : this.btn;
    },
    advertisingText() {
      return this.ad ? this.ad.text : 'Announce yourself here!';
    },
    advertisingStyle() {

      const style = {};

      if (this.ad && this.ad.background.length > 0) {

        // Is an HEX color
        if (/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(this.ad.background)) {

          style['background-color'] = this.ad.background.charAt(0) !== '#' ? `#${this.ad.background}` : this.ad.background;

        // base64 image
        } else if (/^data:image\/([a-zA-Z]*);base64,([^\"]*)/.test(this.ad.background)) {

          style['background-image'] = `url(${this.ad.background})`;

        // image url
        } else if (/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/){

          style['background-image'] = `url(${this.ad.background})`;

        }
      }

      return style;
    }
  },
  methods: {
    onClick() {
      if (this.loading) {
        return;
      }
      this.$emit('updateAd');
    },
  },
};
</script>

<style scoped lang="scss">
.ad-space {
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
  
  color: #2c3e50;  
  text-shadow: 1px 1px #ddd, -1px -1px #ddd, -1px 1px #ddd, 1px -1px #ddd;
  
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
</style>
