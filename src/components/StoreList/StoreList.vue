<template>
  <div>
    <div>
      <p id="storeCount">Here you can find all of our restaurants. We have {{ storesCount }} stores right now!</p>
    </div>
    <div class="store-list">
      <Store class="store-list__item" :title="store.name" :photo="store.image" :location="store.location" v-for="store in storesWithImages" :key="store.id" />
    </div>
  </div>
</template>
<style lang="scss">
@import './StoreList.scss';
</style>
<script>
import Store from '@/components/Store/Store';
import { map, size } from 'lodash/core';

export default {
  name: 'StoreList',
  components: {
    Store
  },
  props: {
    stores: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    storesWithImages () {
      return map(this.stores, function (store) {
        store['image'] = 'https://via.placeholder.com/250?text=' + store.name;

        return store;
      });
    },
    storesCount () {
      return size(this.stores);
    }
  }
}
</script>
