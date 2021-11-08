import React from 'react';
import axios from './axios';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import Users from './users';
import Comments from './comments';
import Todos from './todo';
import Posts from './posts';
import './App.css';

export default function Home() {

    return (
        <div>
            <Router>

            <ul>
                <Link to="/">users</Link><br />

                 

                <Link to="/Todos">comments</Link><br />



                <Link to="/Comments">Todo</Link><br />


                <Link to="/Posts">Post</Link><br />


                </ul>
              

                 <Route exact path='/' element={<Users/>}></Route>

                 <Route exact path='/Todos' element={<Todos/>}></Route>

                 <Route exact path='/Comments' element={<Comments/>}></Route>

                 <Route exact path='/Posts' element={<Posts/>}></Route>
                


            </Router>
        </div>
    );

}



