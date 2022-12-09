import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App=()=> {


  const [progress, setProgress] = useState(0);
  let apiKey=process.env.REACT_APP_NEWS_API_KEY;
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={2}
      />
        <Routes>

          <Route path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={6} country="in"  category="business"/>}>
          </Route>
          <Route path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={6} country="in"  category="general"/>}>
            </Route>
          <Route path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={6} country="in"  category="health"/>}>
            </Route>
          <Route path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={6} country="in"  category="science"/>}>
            </Route>
          <Route path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={6} country="in"  category="sports"/>}>
            </Route>
          <Route path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={6} country="in"  category="technology"/>}>
            </Route>
          <Route path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={6} country="in"  category="science"/>}>
            </Route>
          <Route path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={6} country="in"  category="entertainment"/>}>
          </Route>

        </Routes>

        </Router>

      </div>
    )
}

App.state={
  progress:0
}
export default App