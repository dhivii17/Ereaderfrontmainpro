import React from 'react';
import SignIn from './Login.js';
import Signup from './Signup.js'
import logo from './logo.js';
import Home from './Home';
import Login from './Adminlogin';
import Genres from './Genres'; 
import Dashboard from './Dashboard.js';
import Books from './Books.js';
import LandingPage from './LandingPage';
import Secretly from './Secretly';
import Header from './Header';
import Addbooks from './Addbooks';
import Updatebooks from './Updatebooks';
import Deletebooks from './Deletebooks';
import Viewbooks from './Viewbooks';
import Feedback from "./Feedback.js";
import FeedbackFormMicro from "./FeedbackFormMicro";
import Feed from "./Feed";
import Wishlist from './Wishlist';



import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
const App = () => {
  return (
   <Router>
    
    <div className="App">
      <Switch>
      <Route exact path="/" component={logo}></Route>
      <Route exact path="/LandingPage" component={LandingPage}></Route>
        <Route exact path="/SignIn" component={SignIn}></Route>
        <Route exact path="/Signup" component={Signup}></Route>
        <Route exact path="/Adminlogin" component={Login}></Route>
        <Route exact path="/Header" component={Header}></Route>
        <Route exact path="/Addbooks" component={Addbooks}></Route>
        <Route exact path="/Updatebooks" component={Updatebooks}></Route>
        <Route exact path="/Deletebooks" component={Deletebooks}></Route>
        <Route exact path="/Viewbooks" component={Viewbooks}></Route>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/Secretly" component={Secretly}></Route>
        <Route exact path="/Genres" component={Genres}></Route>
        <Route exact path="/Dashboard" component={Dashboard}></Route>
        <Route exact path="/Books" component={Books}></Route>
        <Route exact path="/Feedback" component={Feedback}></Route>
        <Route exact path="/FeedbackFormMicro" component={FeedbackFormMicro}></Route>
        <Route exact path="/Feed" component={Feed}></Route>   
        <Route exact path="/Wishlist" component={Wishlist}></Route>  



      </Switch>

    </div>
   </Router>
  );
};

export default App;