<template>
  <div class="space">
    <b-container>
      <b-row align-h="center">
        <b-col cols="auto">
          <div id="advertising-space" :class="{'empty': !currentAd}" :style="advertisingStyle">
            <span>{{advertisingText}}</span>
            <b-button class="btn" size="sm" @click="onClick">{{loading ? '...' : 'Update'}}</b-button>
          </div>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="12" md="6">
          <section>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec commodo turpis. Suspendisse lorem justo, sollicitudin eget tortor ac, ornare lobortis ligula. Morbi elit augue, viverra sed massa sed, mollis dictum lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus efficitur risus in quam tempus, posuere tristique sem efficitur. Nulla auctor elit convallis, pellentesque nisl nec, porta quam. Ut accumsan quis nisi vel feugiat. Duis justo augue, pretium quis venenatis cursus, semper eu sem. Donec interdum pretium ultricies.</p>
            <p>Integer eleifend nunc scelerisque, euismod ante et, aliquet turpis. Etiam ut mi elit. Sed lacus quam, feugiat interdum eros sit amet, feugiat congue nisl. Phasellus quam ligula, tristique eget posuere in, sodales non est. Phasellus et accumsan elit. Ut sed lacinia sapien, eget accumsan urna. Etiam id tincidunt neque, vel pretium elit. Nulla facilisi. Nullam nec lectus quis lacus congue finibus id ut ipsum. Proin accumsan efficitur orci, non vehicula mi ullamcorper a. Proin faucibus metus nec sapien ullamcorper suscipit. Etiam vitae dapibus diam. Sed interdum pretium nisi, vel pharetra erat mollis quis. Duis placerat purus finibus, auctor justo in, tincidunt tortor.</p>
          </section>
          <section>
            <h3>Sed quis aliquet turpis</h3>
            <p>Sed quis aliquet turpis. Maecenas tempus lorem porta orci gravida tincidunt. Proin rutrum eget nisi in convallis. Nulla feugiat, diam at dapibus euismod, magna tortor elementum eros, nec posuere erat quam quis justo. Pellentesque neque purus, aliquam id nibh non, pellentesque interdum libero. Fusce non est urna. Proin iaculis tellus sed orci mattis, ut congue magna fermentum. Aenean feugiat maximus mi, eget dictum lacus cursus non. Praesent eleifend orci lacus. Suspendisse potenti. Integer id sem a ligula varius pharetra. Pellentesque vehicula nec tellus id luctus. Mauris scelerisque sem nec lectus porttitor placerat.</p>
            <p>Suspendisse sit amet posuere lacus, nec ullamcorper dui. Suspendisse suscipit turpis lacus, aliquet volutpat ex iaculis a. Pellentesque vel felis eros. Maecenas ac iaculis sem. Morbi ultricies dictum fermentum. Vestibulum nec blandit mauris. Curabitur id leo nibh. Cras vehicula ante ut augue cursus finibus. Morbi volutpat quam elit, et ullamcorper lacus luctus id. Vestibulum varius ut dui vel laoreet. Donec vel placerat est. Donec eu quam mattis, sagittis est ac, sagittis turpis. Sed accumsan, ligula quis lobortis cursus, est nibh feugiat quam, eget eleifend tortor felis non nibh. Curabitur fermentum augue at nisl placerat congue. Integer diam eros, tincidunt eget arcu quis, finibus iaculis metus. Vivamus id est aliquam, consequat nibh sed, convallis dolor.</p>
            <p>Pellentesque placerat lorem id ex feugiat elementum. Vestibulum ut mi urna. Morbi metus tortor, condimentum molestie leo at, rutrum suscipit arcu. Pellentesque ullamcorper id orci sit amet commodo. Duis urna sapien, iaculis vitae metus id, bibendum aliquet dolor. Pellentesque semper lacinia hendrerit. Cras aliquet placerat massa malesuada bibendum.</p>
          </section>
        </b-col>
        <b-col cols="12" md="6">
          <section>
            <h3>Praesent est sapien</h3>
            <p>Praesent est sapien, finibus sit amet ex quis, pulvinar consequat felis. Mauris eleifend nulla nunc, ac cursus ligula elementum vitae. Phasellus rutrum arcu neque, eu aliquet ligula accumsan a. Vivamus varius tortor quis felis volutpat imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ultrices, libero et rhoncus consectetur, purus enim eleifend turpis, in elementum leo augue hendrerit metus. Aliquam eu mattis nulla. Mauris a placerat neque, nec condimentum lacus. Etiam non felis congue, malesuada lacus lacinia, gravida nunc.</p>
          </section>
          <section>
            <h3>Nam condimentum neque</h3>
            <p>Nam condimentum neque eget felis fermentum, quis varius ex eleifend. Praesent sit amet velit justo. Maecenas condimentum, est vitae feugiat blandit, erat ex egestas tortor, at sagittis dolor turpis sit amet lectus. Morbi accumsan purus vitae pharetra molestie. Nunc placerat hendrerit lacus, eu consectetur tellus bibendum sit amet. Nulla pharetra sit amet tortor non tristique. Nulla facilisi. Proin elementum molestie augue, a elementum quam aliquet vel. Curabitur a facilisis lectus, sit amet volutpat elit. Donec dictum, ligula et volutpat feugiat, quam ipsum egestas lorem, ut dignissim turpis magna et sem. Donec ultricies nisi quis purus pharetra congue.</p>
            <p>Suspendisse quis mi eu ante ornare elementum id id diam. Etiam mollis commodo leo, et euismod purus dictum eget. Suspendisse gravida purus et mi auctor, id semper nisi congue. Proin tristique interdum ipsum, a fringilla ligula dictum et. Praesent viverra purus quis tristique posuere. Aliquam venenatis metus et mauris lobortis mattis. Quisque id lectus sollicitudin purus sagittis vehicula sit amet sit amet est.</p>
          </section>
          <section>
            <h3>Vivamus sodales dui in ex maximus</h3>
            <p>Vivamus sodales dui in ex maximus, non facilisis lectus fermentum. Suspendisse volutpat pharetra justo id sodales. Donec eu tristique massa, eu commodo neque. Quisque tempus est justo, a pretium ipsum semper a. Nulla sodales lobortis erat quis tempus. Sed nisi ipsum, tempor vel iaculis tincidunt, malesuada sed magna. Fusce malesuada rutrum ligula gravida rutrum. In fringilla convallis convallis. Aenean quis justo ut mi pellentesque feugiat vitae tempus metus. In mollis accumsan ipsum, non consequat nisi sollicitudin in. Etiam hendrerit turpis vel sollicitudin mattis. Phasellus massa massa, finibus sit amet mollis id, molestie non dui.</p>
            <p>Curabitur semper magna neque, ut hendrerit purus elementum sit amet. Integer ultricies fringilla rhoncus. Mauris dapibus mauris felis, et aliquam erat sagittis id. Pellentesque malesuada laoreet neque, vitae ultrices urna volutpat sit amet. Sed ac lectus neque. Praesent condimentum hendrerit venenatis. In rutrum suscipit massa, vitae accumsan erat ultricies id. Sed id convallis erat. Sed at ex sapien. Nullam id libero at purus rutrum consequat. Aliquam velit magna, porttitor ut iaculis in, venenatis sit amet odio. Integer placerat erat sed leo faucibus dapibus. Quisque id enim tempus, rutrum lectus eget, pharetra massa.</p>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ViewForm from "@/components/ViewForm.vue";
import { Account, Contract, AddressType, ChainIdType } from "nuls-js";

export default {
  name: "Space",
  components: {
    ViewForm
  },
  data() {
    return {
      contract: null,
      currentAd: null,
      account: null,
      loading: false
    };
  },
  computed: {
    advertisingText() {
      return this.currentAd ? this.currentAd.text : 'Announce yourself here!';
    },
    advertisingStyle() {

      const style = {};

      if (this.currentAd && this.currentAd.background.length > 0) {

        // Is an HEX color
        if (/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(this.currentAd.background)) {

          style['background-color'] = this.currentAd.background.charAt(0) !== '#' ? `#${this.currentAd.background}` : this.currentAd.background;

        // base64 image
        } else if (/^data:image\/([a-zA-Z]*);base64,([^\"]*)/.test(this.currentAd.background)) {

          style['background-image'] = `url(${this.currentAd.background})`;

        // image url
        } else if (/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/){

          style['background-image'] = `url(${this.currentAd.background})`;

        }
      }

      return style;
    }
  },
  async created() {

    this.loading = true;

    const contract = this.$route.query.contract;
    const pk = this.$route.query.privateKey;

    this.account = new Account().import(
      pk,
      undefined,
      AddressType.Default,
      ChainIdType.Testnet
    );

    const contractConfig = {
      api: {
        // host: "http://localhost:3000"
        host: "https://explorer.nuls.services"
      }
    };

    try {
      this.contract = await Contract.at(contract, contractConfig);
      await this.viewCurrentAd();
      await this.updateAd();
    } catch (e) {
      alert(e);
    }

    this.loading = false;
  },
  methods: {
    async viewCurrentAd() {
      this.loading = true;

      this.currentAd = await this.contract.viewCurrentAd();
      
      this.loading = false;
    },
    async updateAd() {
      this.loading = true;

      const pe = this.contract.updateAd({
        sender: this.account.address,
        privateKey: this.account.prikey
      });

      pe.on("txHash", txHash => console.log(txHash));

      try {
        await pe;
        await this.viewCurrentAd();
      } catch (e) {
        if (e.toString().indexOf("Update not needed") === -1) {
          alert(e);
        }
      }

      this.loading = false;
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
#advertising-space {
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
