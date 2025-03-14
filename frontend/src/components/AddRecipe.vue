<template>
  <div class="wrapper" id="addRecipe">
    <!-- Tekst iznad dugmeta za dodavanje recepta -->
    <div class="header-text">
      <h1 class="main-title">Dobrodošli u naš receptni kutak!</h1>
      <p class="sub-title">Podelite svoje omiljene recepte sa svetom i obogatite svoj kulinarski repertoar.</p>
    </div>

    <!-- Button za otvaranje modala -->
    <el-button type="primary" class="add-recipe-btn" @click="open = true">Dodaj novi recept</el-button>

    <!-- Modal za dodavanje recepta -->
    <el-dialog v-model="open" title="Dodaj novi recept" width="50%" class="modal">
      <!-- Forma za unos podataka -->
      <el-form :model="form" label-width="120px" class="recipe-form">
        <!-- Naziv recepta -->
        <el-form-item label="Naziv recepta">
          <el-input v-model="form.name" placeholder="Unesite naziv recepta" class="form-input" />
        </el-form-item>

        <!-- Opis recepta -->
        <el-form-item label="Opis recepta">
          <el-input v-model="form.description" type="textarea" placeholder="Unesite opis recepta" class="form-input" />
        </el-form-item>

        <!-- Sastojci -->
        <el-form-item label="Sastojci">
          <div v-for="(ingredient, index) in form.ingredients" :key="index" class="ingredient-item">
            <el-input v-model="form.ingredients[index]" placeholder="Unesite sastojak" class="form-input" />
            <el-button type="danger" @click="removeIngredient(index)" class="remove-btn">X</el-button>
          </div>
          <el-button type="success" @click="addIngredient" class="add-btn">Dodaj sastojak</el-button>
        </el-form-item>

        <!-- Upute -->
        <el-form-item label="Upute">
          <div v-for="(instruction, index) in form.instructions" :key="index" class="instruction-item">
            <el-input v-model="form.instructions[index]" type="textarea" placeholder="Unesite korak" class="form-input" />
            <el-button type="danger" @click="removeInstruction(index)" class="remove-btn">X</el-button>
          </div>
          <el-button type="success" @click="addInstruction" class="add-btn">Dodaj korak</el-button>
        </el-form-item>
      </el-form>

      <!-- Gumbovi za spremanje i zatvaranje -->
      <template #footer>
        <el-button @click="closeModal" class="close-btn">Zatvori</el-button>
        <el-button type="primary" @click="saveRecipe" class="save-btn">Spremi</el-button>
      </template>
    </el-dialog>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useRecipeStore } from '@/stores/RecipeStore'

const open = ref(false)
const form = ref({
  name: '',
  description: '',
  ingredients: [],
  instructions: [],
})

const recipeStore = useRecipeStore()

const addIngredient = () => {
  form.value.ingredients.push('')
}

const removeIngredient = (index) => {
  form.value.ingredients.splice(index, 1)
}

const addInstruction = () => {
  form.value.instructions.push('')
}

const removeInstruction = (index) => {
  form.value.instructions.splice(index, 1)
}

const closeModal = () => {
  open.value = false
  resetForm()
}

const resetForm = () => {
  form.value = {
    name: '',
    description: '',
    ingredients: [],
    instructions: [],
  }
}

const saveRecipe = async () => {
  const data = {
    name: form.value.name,
    description: form.value.description,
    ingredients: form.value.ingredients,
    instructions: form.value.instructions,
    imageUrl: 'https://example.com/default-image.jpg', // Zadana vrijednost
  }
  await recipeStore.addNewRecipe(data)
  closeModal()
}
</script>

<style scoped>
.wrapper {
  height: 30rem;
  background-color: #fcd34d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  padding: 2rem;
}

.header-text {
  color: #1f2937;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.sub-title {
  font-size: 1.125rem;
  color: #4b5563; /* Siva boja */
  margin-bottom: 2rem;
}

/* Stil za dugme za otvaranje modala */
.add-recipe-btn {
  background-color: #38bdf8;
  border-radius: 50px;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-recipe-btn:hover {
  background-color: #22d3ee;
}

/* Modalni stilovi */
.modal {
  transition: all 0.3s ease;
}

/* Stilovi za formu */
.recipe-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

/* Inputi unutar forme */
.form-input {
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 0.75rem;
  transition: border 0.3s ease;
}

.form-input:focus {
  border: 1px solid #38bdf8;
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.3);
}

/* Sastojci i upute */
.ingredient-item, .instruction-item {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 1rem;
}

/* Dugme za uklanjanje sastojka i uputa */
.remove-btn {
  background-color: #ef4444;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
}

.remove-btn:hover {
  background-color: #dc2626;
}

/* Dugme za dodavanje sastojka i uputa */
.add-btn {
  background-color: #4ade80;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
}

.add-btn:hover {
  background-color: #22c55e;
}

/* Gumbovi u footeru */
.close-btn, .save-btn {
  border-radius: 50px;
  padding: 1rem 2rem;
  font-size: 1rem;
}

.close-btn {
  background-color: #ef4444;
  color: white;
}

.save-btn {
  background-color: #38bdf8;
  color: white;
}

.close-btn:hover {
  background-color: #dc2626;
}

.save-btn:hover {
  background-color: #22d3ee;
}
</style>

