import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Footer from './Components/Footer';

export default class App extends Component {
  apiKey=process.env.REACT_APP_API_KEY
  
  render() {
   
    return (
      <div>
        
        <router>
        
        <Router>
        <NavBar/>
          <Routes>

          <Route exact path="/" element={<News apiKey={this.apiKey} key="general" category='general'/>} />  
          <Route exact path="/business"element={<News apiKey={this.apiKey} key="business" category='business'/>}/>  
          <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" category='entertainment'/>}/> 
          <Route exact path="/general"element={ <News apiKey={this.apiKey} key="general" category='general'/>}/> 
          <Route exact path="/health"element={<News apiKey={this.apiKey} key="health" category='health'/>}/>  
          <Route exact path="/science"element={ <News apiKey={this.apiKey} key="science" category='science'/>}/> 
          <Route exact path="/sports"element={<News apiKey={this.apiKey} key="sports" category='sports'/>}/>  
          <Route exact path="/technology"element={ <News apiKey={this.apiKey} key="technology" category='technology'/>}/> 
                  
          </Routes>
            
          
        </Router>
        </router>
        <Footer/>
      </div>
    )
  }
}

