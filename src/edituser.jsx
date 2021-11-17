import React, { useState, useEffect } from "react";
import axios from './axios'
import { useHistory, useParams } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { edituser } from "./actions";
import { useDispatch } from "react-redux";
const EditUser = () => {
  const { id } = useParams();
  const data = useSelector(state => state.edituser.data)
  const dispatch = useDispatch();
  const { name, username, email, address } = data;
  const onInputChange = e => {
    dispatch(edituser({ ...data, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {

    await axios.put(`/users/${id}`, { ...data });
    e.preventDefault();
  };

  const loadUser = async () => {
    const result = await axios.get(`/users/${id}`);
    dispatch(edituser(result.data));
  };
  return (
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
      <Button type="submit" variant="primary">Editusers</Button>
    </Form>
  );
};

export default EditUser;