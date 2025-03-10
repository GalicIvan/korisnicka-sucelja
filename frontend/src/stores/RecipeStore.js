import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import { fetchRecipes, addRecipe, deleteRecipe, updateRecipe } from '@/api/RecipeRepository'

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref([])

  // Funkcija za učitavanje recepata sa servera
  const loadRecipes = async () => {
    // Prvo proveri da li postoje podaci u localStorage
    const savedRecipes = localStorage.getItem('recipes')
    if (savedRecipes) {
      recipes.value = JSON.parse(savedRecipes)
    } else {
      // Ako podaci ne postoje, učitaj ih sa servera
      const response = await fetchRecipes()
      recipes.value = response.data.recipes
      localStorage.setItem('recipes', JSON.stringify(recipes.value)) // Spremi u localStorage
    }
  }

  // Funkcija za dodavanje novog recepta
  const addNewRecipe = async (recipe) => {
    const response = await addRecipe(recipe)
    recipes.value.push(response.data.recipe)
    localStorage.setItem('recipes', JSON.stringify(recipes.value)) // Spremi ažurirane recepte u localStorage
  }

  // Funkcija za brisanje recepta
  const deleteRecipeById = async (id) => {
    await deleteRecipe(id)
    recipes.value = recipes.value.filter(recipe => recipe.id !== id)
    localStorage.setItem('recipes', JSON.stringify(recipes.value)) // Spremi ažurirane recepte u localStorage
  }

  // Funkcija za ažuriranje recepta
  const updateRecipeById = async (id, updatedRecipe) => {
    const response = await updateRecipe(id, updatedRecipe)
    const index = recipes.value.findIndex(recipe => recipe.id === id)
    if (index !== -1) {
      recipes.value[index] = response.data.recipe
    }
    localStorage.setItem('recipes', JSON.stringify(recipes.value)) // Spremi ažurirane recepte u localStorage
  }

  // Učitavanje recepata pri prvom učitavanju komponente
  onMounted(() => {
    loadRecipes()
  })

  return {
    recipes,
    loadRecipes,
    addNewRecipe,
    deleteRecipeById,
    updateRecipeById
  }
})
