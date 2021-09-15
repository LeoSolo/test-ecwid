import Vue from 'vue';
import Vuex from 'vuex';
import {IProduct} from '@/types/IProduct';

Vue.use(Vuex);

interface IState {
  list: IProduct[] | null;
  cart: IProduct[] | [];
  currentProduct: IProduct | null;
}

export default new Vuex.Store({
  state: {
    list: null,
    cart: [],
    currentProduct: null,
  },
  mutations: {
    setList(state: IState, list: IProduct[]) {
      state.list = list;
    },
    addInCart(state: IState, item: IProduct) {
      state.cart = [...state.cart, item];
    },
    removeFromCart(state: IState, id: number) {
      const index = state.cart.findIndex((item) => item.id === id);
      state.cart.splice(index, 1);
    },
    setCurrentProduct(state: IState, item: IProduct) {
      state.currentProduct = item;
    },
  },
  actions: {},
  modules: {},
});
