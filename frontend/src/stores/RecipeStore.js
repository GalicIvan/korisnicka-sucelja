import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchRecipes, addRecipe, deleteRecipe, updateRecipe } from '@/api/RecipeRepository'

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref([])

  const loadRecipes = async () => {
    const response = await fetchRecipes()
    recipes.value = response.data.recipes
  }

  const addNewRecipe = async (recipe) => {
    const response = await addRecipe(recipe)
    recipes.value.push(response.data.recipe)
  }

  const deleteRecipeById = async (id) => {
    await deleteRecipe(id)
    recipes.value = recipes.value.filter(recipe => recipe.id !== id)
  }

  const updateRecipeById = async (id, updatedRecipe) => {
    const response = await updateRecipe(id, updatedRecipe)
    const index = recipes.value.findIndex(recipe => recipe.id === id)
    if (index !== -1) {
      recipes.value[index] = response.data.recipe
    }
  }

  return {
    recipes,
    loadRecipes,
    addNewRecipe,
    deleteRecipeById,
    updateRecipeById
  }
})
