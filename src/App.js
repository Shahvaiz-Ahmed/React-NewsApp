import './App.css';
// import PropTypes from 'prop-types';
import React from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter,Routes,Route,} from "react-router-dom";

const App =()=> {
  let pagesize = 8;
  let ApiKey = "18eb62dd061e43adbbbdcfc5551f01db";
    return (
      <div>
        
        <BrowserRouter>
          <NavBar />
         <Routes>
      <Route path="/" element={<News key="general" pagesize={pagesize} ApiKey={ApiKey} category={"general"} />}></Route>
      <Route path="/business" element={<News key="business" pagesize={pagesize} ApiKey={ApiKey} category={"business"} />}></Route>
      <Route path="/entertainment" element={<News key="entertainment" pagesize={pagesize} ApiKey={ApiKey} category={"entertainment"} />}></Route>
      <Route path="/health" element={<News key="health" pagesize={pagesize} ApiKey={ApiKey} category={"health"} />}></Route>
      <Route path="/science" element={<News key="science" pagesize={pagesize} ApiKey={ApiKey} category={"science"} />}></Route>
      <Route path="/sports" element={<News key="sports" pagesize={pagesize} ApiKey={ApiKey} category={"sports"} />}></Route>
      <Route path="/technology" element={<News key="technology" pagesize={pagesize} ApiKey={ApiKey} category={"technology"} />}></Route>
      </Routes>
  </BrowserRouter>
          
      </div>
    )
}

export default App