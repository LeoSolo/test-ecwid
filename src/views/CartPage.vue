<template>
  <div class="container">
    <h1 class="title">Корзина</h1>
    <CartList/>
    <button v-if="$store.state.cart.length" class="btn" @click="congrats">Оформить покупку</button>
  </div>
</template>

<script>
import Vue from 'vue';
import CartList from '@/components/CartList';

export default Vue.extend({
  name: 'ProductPage',
  components: {CartList},
  methods: {
    congrats() {
      alert('Поздравляем с покупкой');
    },
  },
});
</script>

<style scoped>
.title {
  padding-left: 10px;
}
.btn {
  margin-left: 10px;
}
</style>
