<template>
  <div id="app" :class="changeTheme">
    <Header />
    <button id="changeTheme" @click="isDark = !isDark">Change theme</button>
    <div class="container">
      <transition name="component-fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    
  </div>
</template>
<style lang="scss">
@import '@/assets/styles/styles.scss';
</style>
<script>
import Header from '@/components/Header/Header';

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      isDark: false
    }
  },
  computed: {
    changeTheme() {
      return this.isDark ? 'theme__dark' : 'theme'
    }
  }
}
</script>
