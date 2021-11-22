import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Form } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddUser } from "./actions";
import { requestadduser } from './thunk/adduser';
const Addperson = () => {
  const items = useSelector(state => state.adduser.items)
  console.log(items)
  const dispatch = useDispatch()
  const { name, username, email, address } = items;
  const onInputChange = e => {
    dispatch(AddUser({ ...items, [e.target.name]: e.target.value }));
  };

  const onSubmit = async e => {
    e.preventDefault();
    dispatch(requestadduser())    
    
  };
  //console.log(items)
  return (
    <div>

      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' value={name} placeholder="name" onChange={e => onInputChange(e)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>username</Form.Label>
          <Form.Control type="text" name="username" value={username} onChange={e => onInputChange(e)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" value={email} onChange={e => onInputChange(e)} placeholder="name@example.com" />
        </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>address</Form.Label>
          <Form.Control type="text" name="address" value={address} onChange={e => onInputChange(e)} />
        </Form.Group>
        <Button type="submit" variant="primary">Adduser</Button>
      </Form>
    </div>
  );
};

export default Addperson;