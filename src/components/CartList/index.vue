<template>
  <div class="container">
    <ul class="cart-list" v-if="$store.state.cart.length">
      <li class="cart-item" v-for="(product, index) in $store.state.cart" :key="index">
        <span class="title">{{ product.name }}</span>
        <span class="price">{{ product.price }} руб</span>
        <button class="btn delete-btn" @click="removeItemFromCart(product.id)">Удалить</button>
      </li>
    </ul>
    <div v-else class="empty-tag">Здесь пока пусто</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Api from '@/services/api/api';
import {IProduct} from '@/types/IProduct';

export default Vue.extend({
  name: 'CartList',
  methods: {
    removeItemFromCart(id) {
      this.$store.commit('removeFromCart', id);
    }
  }
});
</script>

<style scoped lang="scss">
@import "style";
</style>
