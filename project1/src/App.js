import React from 'react';
import './App.css';
import Nav from './components/nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssCourse from './components/csscourse';
import ReactCourse from './components/reactcourse';
import Homepage from './components/HomePage';
import Login from './components/login';
import Todo from './components/todoList';
import Togo from './components/togoList';


// import Review from './components/review';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
 
     
      <Switch>
      <Route path='/' exact component={Homepage}/>
      <Route path='/reactcourse' component={ReactCourse}/>
      <Route path='/csscourse'component={CssCourse}/>
      <Route path='/login'component={Login}/>
      <Route path='/todo' component={Todo}/>
      <Route path='/togo' component={Togo}/>
  
      
      </Switch>

      </BrowserRouter>
   
    </div>
  );
}


export default App;
