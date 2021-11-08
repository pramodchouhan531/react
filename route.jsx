import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Users from './users';
import Comments from './comments';
import Todos from './todo';
import Posts from './posts';
import './App.css';

export default function Home() {

    return (

        <Router>

            <div className="App">

                <ul className="App-header">
                    <li>

                        <Link to="/">users</Link>

                    </li>


                    <li>

                        <Link to="/Todos">comments</Link>

                    </li>
                    <li>

                        <Link to="/Comments">Todo</Link>

                    </li>

                    <li>

                        <Link to="/Posts">Post</Link>

                    </li>

                </ul>

              

                    <Route exact path='/' component={Users}></Route>

                    <Route exact path='/Todos' component={Todos}></Route>

                    <Route exact path='/Comments' component={Comments}></Route>

                    <Route exact path='/Posts' component={Posts}></Route>

             
            </div>

        </Router>

    );

}



