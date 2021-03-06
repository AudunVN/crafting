// Data reducer
export const SET_CRAFTING_SLOT = 'SET_CRAFTING_SLOT'
export const setCraftingSlot = (index, ingredient) => ({
  type: SET_CRAFTING_SLOT,
  payload: {
    index,
    ingredient
  }
})

export const RESET_CRAFTING_SLOT = 'RESET_CRAFTING_SLOT'
export const resetCraftingSlot = (index) => ({
  type: RESET_CRAFTING_SLOT,
  payload: {
    index
  }
})

export const SET_FURNACE_SLOT = 'SET_FURNACE_SLOT'
export const setFurnaceSlot = (ingredient) => ({
  type: SET_FURNACE_SLOT,
  payload: {
    ingredient
  }
})

export const RESET_FURNACE_SLOT = 'RESET_FURNACE_SLOT'
export const resetFurnaceSlot = () => ({
  type: RESET_FURNACE_SLOT
})

export const SET_FURNACE_DATA = 'SET_FURNACE_DATA'
export const setFurnaceData = (key, value) => ({
  type: SET_FURNACE_DATA,
  payload: {
    [key]: value
  }
})

export const SET_FIRST_EMPTY_CRAFTING_SLOT = 'SET_FIRST_EMPTY_CRAFTING_SLOT'
export const setFirstEmptyCraftingSlot = (ingredient) => ({
  type: SET_FIRST_EMPTY_CRAFTING_SLOT,
  payload: {
    ingredient
  }
})

export const SET_OUTPUT_SLOT = 'SET_OUTPUT_SLOT'
export const setOutputSlot = (ingredient) => ({
  type: SET_OUTPUT_SLOT,
  payload: {
    ingredient
  }
})

export const RESET_OUTPUT_SLOT = 'RESET_OUTPUT_SLOT'
export const resetOutputSlot = () => ({
  type: RESET_OUTPUT_SLOT
})

export const SET_GROUP = 'SET_GROUP'
export const setGroup = (group) => ({
  type: SET_GROUP,
  payload: group
})

// Options reducer
export const SET_SHAPE = 'SET_SHAPE'
export const setShape = (shape) => ({
  type: SET_SHAPE,
  payload: shape
})

export const SET_EMPTY_SPACE = 'SET_EMPTY_SPACE'
export const setEmptySpace = (emptySpace) => ({
  type: SET_EMPTY_SPACE,
  payload: emptySpace
})

export const SET_OUTPUT_RECIPE = 'SET_OUTPUT_RECIPE'
export const setOutputRecipe = (recipe) => ({
  type: SET_OUTPUT_RECIPE,
  payload: recipe
})

export const SET_TAB = 'SET_TAB'
export const setTab = (tab) => ({
  type: SET_TAB,
  payload: tab
})

// Private reducer
export const TOGGLE_SHOWING_CONTEXT_MENU = 'TOGGLE_SHOWING_CONTEXT_MENU'
export const toggleContextMenu = () => ({
  type: TOGGLE_SHOWING_CONTEXT_MENU
})

export const TOGGLE_SHOWING_COUNT_MENU = 'TOGGLE_SHOWING_COUNT_MENU'
export const toggleCountMenu = () => ({
  type: TOGGLE_SHOWING_COUNT_MENU
})

export const TOGGLE_SHOWING_NBT_MENU = 'TOGGLE_SHOWING_NBT_MENU'
export const toggleNBTMenu = () => ({
  type: TOGGLE_SHOWING_NBT_MENU
})

export const SET_NBT = 'SET_NBT'
export const setNBT = (nbt) => ({
  type: SET_NBT,
  payload: nbt
})
