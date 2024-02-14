import './App.css';

import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { Business, Entertainment,  Health, Science, Sports, Technology } from './components/categary'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LoadingBar from 'react-top-loading-bar';



const App = () => {


  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          {/* <LoadingBar height={3} color='#f11946' /> */}
          <Routes>
            <Route path="/"
              element={<News
              />} />



            <Route exact path="/business"
              element={<Business
              />} />


            <Route exact path="/entertainment"
              element={<Entertainment
              />} />


          

            <Route exact path="/health"
              element={<Health
              />} />


            <Route exact path="/science"
              element={<Science
              />} />


            <Route exact path="/sports"
              element={<Sports
              />} />


            <Route exact path="/technology"
              element={<Technology
              />} />


          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;