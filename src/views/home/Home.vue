<template>
  <div>
      <RecipeCard :url="recipe.url" :title="recipe.title" :author="recipe.author"/>
  </div>
</template>

<script>
import RecipeCard from './components/recipeCard'
export default {
    components:{
        RecipeCard,
    },
    data(){
        return{
            recipe:{
                url:'',
                title:'',
                author:'ldx'
            }
        }
    },
    methods:{
        getData(){
            this.recipe.url = 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            this.recipe.title = '好吃的🍔';
            this.recipe.author = 'ldx';
        }
    },
    mounted(){
        this.getData();
    }
}
</script>

<style>

</style>