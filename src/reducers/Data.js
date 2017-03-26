import Ingredient from '../classes/Ingredient'

export default function Data(state = {
    ingredients: [],
    crafting: new Array(9).fill(null).map(i => new Ingredient()),
    output: new Ingredient()
  }, action) {
  let newCrafting, newOutput
  switch (action.type) {
    case 'SET_INGREDIENTS':
      // create array of ingredients
      return {
        ...state,
        ingredients: action.payload.map((ingredient) => new Ingredient(ingredient.id, ingredient.readable, ingredient.texture))
      }
    case 'SET_CRAFTING_SLOT':
      // clone crafting
      newCrafting = [...state.crafting]
      // update ingredient
      newCrafting[action.payload.index].update(
        action.payload.ingredient.id,
        action.payload.ingredient.readable,
        action.payload.ingredient.texture
      )
      return {
        ...state,
        crafting: newCrafting
      }
    case 'RESET_CRAFTING_SLOT':
      // clone crafting
      newCrafting = [...state.crafting]
      // reset ingredient
      newCrafting[action.payload.index].reset()
      return {
        ...state,
        crafting: newCrafting
      }
    case 'SET_OUTPUT_SLOT':
      // update output slot with new instance
      newOutput = new Ingredient(
        action.payload.ingredient.id,
        action.payload.ingredient.readable,
        action.payload.ingredient.texture
      )
      return {
        ...state,
        output: newOutput
      }
    case 'RESET_OUTPUT_SLOT':
      // reset output slot with new instance
      newOutput = new Ingredient()
      return {
        ...state,
        output: newOutput
      }
    case 'DYNAMIC':
      return {
        ...state,
        [action.name]: action.value
      }
    default:
      return state
  }
}