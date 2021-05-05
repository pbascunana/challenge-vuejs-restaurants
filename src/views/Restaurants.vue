<template>
  <div class="page page__stores">
    <p id="welcomeMessage">{{ welcomeMessage }}</p>
    <div class="pages__stores-list">
      <label for="">Find stores by name: </label>
      <input id="findStores" v-model="search" />
      <StoreList :stores="stores" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
const stores = require('@/assets/stores/stores.json');
import { filter } from 'lodash/core';
import { includes } from 'lodash';

export default {
  name: 'Stores',
  components: {
    StoreList: () => import('@/components/StoreList/StoreList')
  },
  data () {
    return {
      currentTime: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
      search: ''
    }
  },
  computed: {
    welcomeMessage () {
      return 'Welcome to our restaurants list! Your local time is: ' + this.currentTime;
    },
    stores() {
      if (this.search === '') {
        return stores
      } else {
        return filter(stores, (store) => {
          return includes(store.name, this.search)
        });
      }
    }
  }, 
  mounted() {
    const setTimer = () => setTimeout(() => {
      this.currentTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
      setTimer();
    }, 1000);
    setTimer();
  }
}
</script>
