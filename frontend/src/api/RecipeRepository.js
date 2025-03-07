import apiConfig from './config'

// Dohvati sve recepte
export const fetchRecipes = async () => {
  const response = await apiConfig.get('/recipes')
  return response.data
}

// Dodaj novi recept
export const addRecipe = async (recipe) => {
  const token = localStorage.getItem('token')

  try {
    const response = await apiConfig.post('/recipes', recipe, {
      headers: {
        Authorization: `Bearer ${token}`, // Dodajte token u zaglavlje
      },
    })
    return response.data
  } catch (error) {
    console.error('Greška pri dodavanju recepta:', error)
    throw error
  }
}

// Obriši recept
export const deleteRecipe = async (id) => {
  const response = await apiConfig.delete(`/recipes/${id}`)
  return response.data
}

// Ažuriraj recept
export const updateRecipe = async (id, updatedRecipe) => {
  const response = await apiConfig.patch(`/recipes/${id}`, updatedRecipe)
  return response.data
}
