
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  //const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <Navbar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        
        <Routes>
        <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="General"  country="in" category="General"/>}/>
        <Route exact path='/About' element={<News setProgress={setProgress} apiKey={apiKey} key="About" country="in" category="About"/>}/>
        <Route exact path='/Business' element={<News setProgress={setProgress} apiKey={apiKey} key="Business"  country="in" category="Business"/>}/>
        <Route exact path='/Entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="Entertainment"  country="in" category="Entertainment"/>}/>         
        <Route exact path='/General' element={<News setProgress={setProgress} apiKey={apiKey} key="General"  country="in" category="General"/>}/>         
        <Route exact path='/Health' element={<News setProgress={setProgress} apiKey={apiKey} key="Health"  country="in" category="Health"/>}/>
        <Route exact path='/Science' element={<News setProgress={setProgress} apiKey={apiKey} key="Science"  country="in" category="Science"/>}/>
        <Route exact path='/Sports' element={<News setProgress={setProgress} apiKey={apiKey} key="Sport"  country="in" category="Sports"/>}/>
        <Route exact path='/Technology' element={<News setProgress={setProgress} apiKey={apiKey} key="Technology"  country="in" category="Technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
  export default App;

