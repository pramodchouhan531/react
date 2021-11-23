import undoable from 'redux-undo'

const initialstate ={
  data:[{ 
  title: "",
  desc: "",
 }]

};

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        input:action.input,
        desc:action.desc,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }

}
const update = (state=initialstate, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        data:action.payload,
        loading:false      
   }
  }
}



const undoableTodos = undoable(todos)

export default undoableTodos
