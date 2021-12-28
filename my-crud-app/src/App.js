import './App.css';
import React from 'react'
import { Provider } from 'react-redux'
import CreateUser from './container/createUser'
import store from './features/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './container/home';
import About from './container/about';
import Layout from './router/layout';
import Update from './container/update';
function App() {
  return (
   <Provider store={store}>
      <div className='App'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="add" element={<CreateUser/>} />
                <Route path="about" element={<About/>} />
                <Route path="update" element={<Update/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
      <hr/>
      <p>copyright©2021.All Rights Reserved by Lorem Ipsum.Inc</p>
      </div>
    </Provider>
  )
}

export default App;
