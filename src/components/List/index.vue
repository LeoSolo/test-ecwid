<template>
  <div class="container">
    <ul class="list">
      <li class="list-item" v-for="(product, index) in list" :key="index" @click.self="viewProduct(product.id)">
        <h4 class="title">{{product.name}}</h4>
        <img class="img" :src="product.smallThumbnailUrl" alt=""/>
        <div class="price">{{product.price}} руб</div>
        <button class="btn buy-btn" @click.self="addItemInCart(product.id)">Купить</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Api from '@/services/api/api';
import {IProduct} from '@/types/IProduct';

interface IData {
  list: IProduct[] | null;
}

export default Vue.extend({
  name: 'List',
  data(): IData {
    return {
      list: null,
    };
  },
  async mounted() {
    this.list = (await Api.getList()).items;
  },
  methods: {
    addItemInCart(id) {
      const item = this.list?.find((product) => product.id === id);
      this.$store.commit('addInCart', item);
      alert('Товар добавлен в корзину');
    },
    viewProduct(id) {
      const item = this.list?.find((product) => product.id === id);
      this.$store.commit('setCurrentProduct', item);
      this.$router.push('/product');
    },
  },
});
</script>

<style scoped lang="scss">
@import "style";
</style>
