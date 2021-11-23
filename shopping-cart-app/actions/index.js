let nextTodoId = 1
export const addTodo = (input,desc,sir) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  input,
  desc,
  sir
})

export const update = (payload)=>({
  type:"EDIT_USERS",
  payload
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
