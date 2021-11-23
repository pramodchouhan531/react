import react from "react";
import { connect } from "react-redux";
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input
  let desc

  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (!desc.trim() && !input.trim()) {
        return
      }
      dispatch(addTodo(input, desc))
      input = ""
      desc = ""
    }}>
      <h1>Todo form</h1>
      <input type="text" name="title" onChange={(e) => input = e.target.value} placeholder="Title" /><br /> <br />
      <input type="text" name="description" onChange={(e) => desc = e.target.value} placeholder="Description" /><br />
      <br />
      <button type="submit">add todo</button>
    </form>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
