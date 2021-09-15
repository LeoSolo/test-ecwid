<template>
  <div id="app">
    <Header/>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {Header},
};
</script>

<style lang="scss">
@import "styles/style";

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
