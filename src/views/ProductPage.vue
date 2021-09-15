<template>
  <div class="container">
    <h2>{{$store.state.currentProduct.name}}</h2>
    Подробное описание товара.
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProductPage',
});
</script>
