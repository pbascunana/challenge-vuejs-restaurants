<template>
  <div>
    <div>
      <Banner 
        :backgroundMedia="{type: 'image', src: 'https://via.placeholder.com/300?text=MiRestaurante' }" 
        text="El restaurante xxxxxxx" 
        textDistribution="top"
      ></Banner>
    </div>
    <div>
      <p id="singularMessage" v-if="onlyOneMeal">You can cook {{ numberOfMeals }} meal</p>
      <p id="pluralMessage" v-else>You can cook {{ numberOfMeals }} meals</p>
      <p id="recipeMessage">The secret formula to cook your meals is:</p>
      <p id="pasta">Pasta: {{ ingredients.pasta * numberOfMeals }}</p>
      <p id="bacon">Bacon: {{ ingredients.bacon * numberOfMeals }}</p>
      <p id="eggs">Eggs: {{ ingredients.eggs * numberOfMeals }}</p>
      <p id="milk">Milk: {{ ingredients.milk * numberOfMeals }}</p>
      <p id="butter">Butter: {{ ingredients.butter * numberOfMeals }}</p>
      <p id="oil">Oil: {{ ingredients.oil * numberOfMeals }}</p>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner/Banner'
export default {
  name: 'secretRecipe',
  props: {
    ingredients: {
      type: Object,
      required: true
    },
    numberOfMeals: {
      type: Number,
      required: true
    }
  },
  components: {
    Banner
  },
  computed: {
    onlyOneMeal() {
      return this.numberOfMeals === 1 ? true : false
    }
  }
}
</script>
