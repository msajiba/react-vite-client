import React from 'react'
import './App.css';
import Header from './pages/Shared/Header'
import Footer from './pages/Shared/Footer'
import Home from './pages/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Add from './pages/Add/Add';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import NotFound from './pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import Update from './pages/Update/Update';


function App() {
 
  return (
    <>
      <Header> </Header>

        <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/home' element={<Home />}> </Route>
            <Route path='/add' element={<Add />}> </Route>
            <Route path='/login' element={<Login />}> </Route>
            <Route path='/register' element={<Register />}> </Route>
            <Route path='update/:updateId' element={<Update />}> </Route>
            <Route path='*' element={<NotFound />}> </Route>
        </Routes>

      <Footer> </Footer>
      <ToastContainer />
    </>
  )
}

export default App
