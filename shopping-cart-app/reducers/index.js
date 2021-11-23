import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { update } from '../actions'
const todoApp = combineReducers({
  todos,
  visibilityFilter,
  update
})

export default todoApp
