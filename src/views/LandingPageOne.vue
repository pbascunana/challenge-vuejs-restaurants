<template>
  <div>
    <Banner
      :backgroundMedia="landing.source"
      :text="landing.text"
      :textDistribution="landing.textDistribution"
      v-for="landing in landingPageOneData"
      :key="landing.id"
    ></Banner>
  </div>
</template>

<script>
import Banner from '@/components/Banner/Banner';
import landings from '@/assets/stores/landings.json';
import { map } from 'lodash/core';

export default {
  name: 'LandingPageOne',
  components: {
    Banner
  },
  computed: {
    landingPageOneData () {
      return map(landings, (landing) => {
        landing.source.src = landing.source.type === 'image' 
                             ? `https://via.placeholder.com/480x60?text=${landing.name}` 
                             : 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
        return landing;
      });
    }
  } 
}
</script>
