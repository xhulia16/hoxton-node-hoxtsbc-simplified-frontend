import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { LogIn } from './pages/LoginForm'
import { PageNotFound } from './pages/PageNotFound'
import { SignUp } from './pages/SIgnUpForm'
import { Transactions } from './pages/Transactions'

type User={
  id: number
  email:string
  password: string
}

function App() {

  return (
    <div className="App">
      <header>
        <h1>Hoxt-SBC</h1>
      </header>
      <main>
        <Routes>
        <Route index element={<Navigate to='/home' />} />
        <Route path="/home" element={<Transactions/>}></Route>
        <Route path="/logIn" element={<LogIn/>}></Route>
        <Route path="/signUp" element={<SignUp/>}></Route>
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </main>
    </div>
  )
}

export default App
