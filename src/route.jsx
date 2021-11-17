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
            </ul>
                 <Route exact path='/' component={Users}/>
                 <Route exact path="/posts/:userId" component={Posts}/>
                 <Route exact path="/Todos/:userId" component={Todos}/>
                 <Route exact path="/users/edit/:id" component={EditUser}/>
                 <Route exact path="/posts/:postId/comments" component={Comments}/>

            </Router>
        </div>
    );

}



