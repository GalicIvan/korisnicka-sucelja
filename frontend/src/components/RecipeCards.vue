<template>
  <div class="wrapper">
    <!-- Naslov i tekst iznad kartica -->
    <div class="header-text">
      <h1 class="main-title">Istražite naše recepte</h1>
      <p class="sub-title">Pronađite svoje omiljene recepte i obogatite kulinarske vještine.</p>
    </div>

    <div class="card-container">
      <!-- Prikaz recepta u karticama -->
      <el-card
        v-for="recipe in recipeStore.recipes"
        :key="recipe.id"
        @click="openRecipeDialog(recipe)"
        class="card"
      >
        <template #header>
          <h3 class="card-title">{{ recipe.name }}</h3>
        </template>
        <p class="card-description">{{ recipe.description }}</p>
      </el-card>
    </div>

    <!-- Modal za prikaz detalja recepta -->
    <el-dialog v-model="isDialogOpen" :title="selectedRecipe?.name" width="60%" center>
      <div class="modal-content">
        <p class="modal-description">{{ selectedRecipe?.description }}</p>

        <!-- Sastojci -->
        <div>
          <h4 class="modal-subtitle">Sastojci:</h4>
          <ul class="ingredient-list">
            <li v-for="(ingredient, index) in selectedRecipe?.ingredients" :key="index">{{ ingredient }}</li>
          </ul>
        </div>

        <!-- Upute -->
        <div>
          <h4 class="modal-subtitle">Upute:</h4>
          <ol class="instruction-list">
            <li v-for="(instruction, index) in selectedRecipe?.instructions" :key="index">{{ instruction }}</li>
          </ol>
        </div>
      </div>

      <!-- Gumb za zatvaranje -->
      <template #footer>
        <el-button @click="isDialogOpen = false" class="close-btn">Zatvori</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRecipeStore } from '@/stores/RecipeStore'

const selectedRecipe = ref(null)
const isDialogOpen = ref(false)
const recipeStore = useRecipeStore()

onMounted(async () => {
  await recipeStore.loadRecipes()
})

const openRecipeDialog = (recipe) => {
  selectedRecipe.value = recipe
  isDialogOpen.value = true
}
</script>

<style scoped>
/* Wrapper koji centralizuje sadržaj */
.wrapper {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(135deg, #6ee7b7, #38bdf8);
  padding: 2rem;
  text-align: center;
  gap: 3rem;
}

/* Naslov i tekst iznad kartica */
.header-text {
  font-family: 'Roboto', sans-serif;
  color: #333;
}

.main-title {
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.sub-title {
  font-size: 1.125rem;
  color: #4b5563;
}

/* Kontejner za kartice */
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tri kolone */
  gap: 20px;
  width: 100%;
  max-width: 1200px;
}

/* Stilovi za kartice */
.card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin: 1rem;
}

.card-description {
  font-size: 1rem;
  color: #666;
  margin: 0 1rem 1rem;
}

/* Modalni sadržaj */
.modal-content {
  padding: 1.5rem;
}

.modal-description {
  font-size: 1.1rem;
  color: #333;
}

.modal-subtitle {
  font-size: 1.2rem;
  font-weight: bold;
  color: #444;
  margin-bottom: 0.5rem;
}

.ingredient-list,
.instruction-list {
  margin-left: 20px;
}

.ingredient-list li,
.instruction-list li {
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
}

/* Stilovi za dugme u modalnom dijalogu */
.close-btn {
  background-color: #ef4444;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.close-btn:hover {
  background-color: #dc2626;
}
</style>
