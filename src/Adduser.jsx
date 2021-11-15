import React, { useState } from "react";
import axios from './axios';
import { Button, Form } from 'react-bootstrap';
const AddUser = () => {

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
  });

  const { name, username, email, address } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    await axios.post("/users", user);
    e.preventDefault();

  };
  console.log(user)
  return (
    <>
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
    </>
  );
};

export default AddUser;