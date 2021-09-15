<template>
  <div class="header">
    <router-link class="link" to="/" exact>Главная</router-link>
    <router-link class="link" to="/cart" exact>Корзина</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default  Vue.extend({
  name: 'Header',
});
</script>

<style scoped lang="scss">
@import "style";
</style>
