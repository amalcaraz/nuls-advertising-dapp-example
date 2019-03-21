<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-form-group id="view-type-group" label="View Type:" label-for="view-type" label-align="left">
      <b-form-select id="view-type" :options="options" required v-model="form.type"/>
    </b-form-group>

    <b-form-group
      id="contract-address-group"
      label="Contract address:"
      label-for="contract-address"
      label-align="left"
    >
      <b-form-input
        id="contract-address"
        type="text"
        v-model="form.address"
        required
        :state="addressValidation"
        ref="addr"
        placeholder="Enter the smart contract address"
      />

      <b-form-invalid-feedback class="text-left" id="inputLiveFeedback">
        Length of address should be 32
      </b-form-invalid-feedback>

    </b-form-group>

    <b-form-group
      v-if="form.type === 1"
      id="private-key-group"
      label="Private key:"
      label-for="private-key"
      label-align="left"
    >
      <b-form-input
        id="private-key"
        type="text"
        v-model="form.pk"
        required
        :state="privateKeyValidation"
        ref="pk"
        placeholder="Enter the owner private key"
      />

      <b-form-invalid-feedback class="text-left" id="inputLiveFeedback">
        Length of address should be 66 and should start with "00"
      </b-form-invalid-feedback>

    </b-form-group>

    <b-button block type="submit" variant="primary">Go</b-button>
  </b-form>
</template>

<script>
export default {
  name: 'ViewForm',
  computed: {
    addressValidation() {
      if (this.validate) {
        return this.form.address.length === 32;
      }
      return null;
    },
    privateKeyValidation() {
      if (this.validate) {
        return this.form.pk.length === 66 && this.form.pk.substr(0, 2) === '00';
      }
      return null;
    },
  },
  data() {
    return {
      show: true,
      validate: false,
      form: {
        address: 'TTb9gRKsjFYjr26LmKQEkP7MKuR1v4pd',
        pk: '',
        type: 1,
      },
      options: [
        { text: 'Advertising Space', value: 1 },
        { text: 'Advertising Provider', value: 2 },
      ],
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      this.validate = true;

      if (this.addressValidation && (this.form.type !== 1 || this.privateKeyValidation)) {
        this.$emit('submit', {
          type: this.form.type,
          contract: this.form.address,
          privateKey: this.form.pk,
        });
      }
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.address = '';
      this.form.pk = '';
      this.form.type = null;

      this.validate = false;

      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
