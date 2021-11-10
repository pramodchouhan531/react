import React from 'react';
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';
import Users from './users';
import Comments from './comments';
import Todos from './todo';
import Posts from './posts';
import './App.css';
import EditUser from './edituser';
export default function Home() {

    return (
        <div>
            <Router>

            <ul>
                <Link to="/">users</Link><br />

                 

                <Link to="/todos">comments</Link><br />



                <Link to="/comments">Todo</Link><br />


                <Link to="/posts">Post</Link><br />


                </ul>
              
           
                 <Route exact path='/' component={Users}/>
                 <Route exact path='/todos' component={Todos}/>
                 <Route exact path='/comments' component={Comments}/>
                 <Route exact path='/posts' component={Posts}/>
                 <Route exact path="/users/:id" component={Posts}/>
                 <Route exact path="/Todos/:id" component={Todos}/>
                 <Route exact path="/users/edit/:id" component={EditUser}/>
             

            </Router>
        </div>
    );

}



