import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import WelcomePage from './Components/WelcomePage'
import SignupPage from './Components/SignupPage'
import LoginPage from './Components/LoginPage'
import HomePage from './Components/HomePage'
import Chatbox from './Components/ChatBox'
import ProfilePage from './Components/ProfilePage'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<WelcomePage />}></Route>
      <Route path='/signup' element={<SignupPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/home' element={<HomePage />}></Route>
      <Route path='/chatbox' element={<Chatbox />}></Route>
      <Route path='/profilepage' element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
