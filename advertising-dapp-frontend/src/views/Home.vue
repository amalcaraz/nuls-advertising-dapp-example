<template>
  <div class="home">
    <b-container>
      <b-row align-h="center">
        <b-col cols="4">
          <view-form @submit="onSubmit"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import ViewForm from '@/components/ViewForm.vue';

export default {
  name: 'home',
  components: {
    ViewForm,
  },
  methods: {
    onSubmit(data) {

      if (data.type === 1) {

        this.$router.push({
          name: "space",
          query: { contract: data.contract, privateKey: data.privateKey },
        });

      } else {

        this.$router.push({
          name: "provider",
          query: { contract: data.contract },
        });

      }
    },
  },
};
</script>
