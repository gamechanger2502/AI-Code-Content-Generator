import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import Code from './components/Code';
import Content from './components/Content';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className='App'> 
    <Navigation/>

    <Routes> 
      <Route path="/" exact element={<Home/>} />
      <Route path="/content" element={<Content/>} />
      <Route path="/code" element={<Code/>} />
    </Routes>
    

      
    </div>
    </Router>
  );
}

export default App;
