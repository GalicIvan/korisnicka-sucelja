<template>
  <div id="recipes" class="wrapper">
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
        <div class="modal-section">
          <h4 class="modal-subtitle">Sastojci:</h4>
          <div class="ingredient-container">
            <div
              v-for="(ingredient, index) in selectedRecipe?.ingredients"
              :key="index"
              class="ingredient-tile"
            >
              <p>{{ ingredient }}</p>
            </div>
          </div>
        </div>

        <!-- Upute -->
        <div class="modal-section">
          <h4 class="modal-subtitle">Upute:</h4>
          <ol class="instruction-list">
            <li v-for="(instruction, index) in selectedRecipe?.instructions" :key="index">
              {{ instruction }}
            </li>
          </ol>
        </div>
      </div>

      <!-- Dugme za brisanje recepta u modalnom dijalogu -->
      <template #footer>
        <el-button @click="isDialogOpen = false" class="close-btn">Zatvori</el-button>
        <el-button type="danger" @click="deleteRecipe(selectedRecipe?.id)" class="delete-button">
          Obriši recept
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRecipeStore } from '@/stores/RecipeStore';

const selectedRecipe = ref(null);
const isDialogOpen = ref(false);
const recipeStore = useRecipeStore();

onMounted(async () => {
  await recipeStore.loadRecipes();
});

const openRecipeDialog = (recipe) => {
  selectedRecipe.value = recipe;
  isDialogOpen.value = true;
};

const deleteRecipe = async (id) => {
  if (id) {
    await recipeStore.deleteRecipeById(id);
    isDialogOpen.value = false; // Zatvori modal nakon brisanja
  }
};
</script>

<style scoped>
/* Postavljanje modernog fonta */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

/* Wrapper koji centralizuje sadržaj */
.wrapper {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(135deg, #f1c6b0, #a2d2ff);
  padding: 2rem;
  text-align: center;
  gap: 3rem;
}

/* Naslov i tekst iznad kartica */
.header-text {
  color: #333;
}

.main-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.sub-title {
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 2rem;
}

/* Kontejner za kartice */
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
}

/* Stilovi za kartice */
.card {
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
}

.card-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
  margin: 1rem;
  text-align: center;
}

.card-description {
  font-size: 1.1rem;
  color: #666;
  margin: 0 1rem 1rem;
  text-align: center;
}

/* Modalni sadržaj */
.modal-content {
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
}

/* Modal Description */
.modal-description {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1rem;
}

/* Subtitle */
.modal-subtitle {
  font-size: 1.4rem;
  font-weight: 600;
  color: #2b2d42;
  margin-bottom: 0.8rem;
}

/* Sastojci i upute - Tile stil */
.ingredient-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.ingredient-tile {
  background-color: #f0f8ff;
  border-radius: 8px;
  padding: 12px;
  font-size: 1rem;
  color: #333;
  width: 160px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.ingredient-tile p {
  margin: 0;
}

/* Upute lista */
.instruction-list {
  padding-left: 20px;
  list-style-type: decimal;
  color: #444;
}

.instruction-list li {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

/* Stilovi za dugme u modalnom dijalogu */
.close-btn,
.delete-button,
.add-ingredient-btn {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: 600;
}

.close-btn:hover,
.delete-button:hover,
.add-ingredient-btn:hover {
  background-color: #388e3c;
}

/* Dugme za brisanje */
.delete-button {
  background-color: #ef4444;
  margin-left: 1rem;
}

.delete-button:hover {
  background-color: #dc2626;
}

/* Stilovi za input za dodavanje sastojka */
.ingredient-input {
  padding: 12px;
  font-size: 1rem;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.add-ingredient {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.add-ingredient-btn {
  background-color: #0d6efd;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
}

.add-ingredient-btn:hover {
  background-color: #0a58ca;
}
</style>
