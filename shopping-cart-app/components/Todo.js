import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Dispatch } from 'react'
const Todo = ({ onClick, completed, input,desc,id}) => (

  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {id}<br/>
    Title : {input}<br/>
    Description : {desc}<br/>
    <button onClick={update(id)}>update</button>
  </li>
)
const update=(id)=>{
   
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
