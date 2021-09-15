<template>
  <div class="container">
    <List/>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import List from '@/components/List/index.vue';

export default Vue.extend({
  name: 'ListPage',
  components: {List},
});
</script>
