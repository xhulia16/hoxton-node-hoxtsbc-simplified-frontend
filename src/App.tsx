import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { LogIn } from "./pages/LoginForm";
import { PageNotFound } from "./pages/PageNotFound";
import { SignUp } from "./pages/SIgnUpForm";
import { Transactions } from "./pages/Transactions";

export type User = {
  id: number;
  email: string;
  password: string;
};

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  let navigate= useNavigate()

  window.currentUser=currentUser

  function LogInUser(data) {
    setCurrentUser(data.user);
    localStorage.token= data.token

  }

  function logOutUser() {
    setCurrentUser(null);
    localStorage.removeItem('token')
  }

useEffect(()=>{
  if(localStorage.token){
    fetch(`http://localhost:5000/validate`, {
      headers: {
        Authorization: localStorage.token 
      }
    })
    .then(resp=>resp.json())
    .then(data=>{
      if(data.error){
        alert(data.error)
      }
      else{
        LogInUser(data)
      }
    })
  }
},[])

  return (
    <div className="App">
      <header>
        <Link to="/home">
          <h1>Hoxt-SBC</h1>
        </Link>

        {currentUser ? (
          <button onClick={()=>{
            logOutUser()
            navigate('/home')
          }}>LogOut</button>
        ) : (
          <div className="user-actions">
            <Link to="/logIn">
              <h4>LogIn</h4>
            </Link>
            <Link to="/signUp">
              <h4>SignUp</h4>
            </Link>
          </div>
        )}
      </header>
      <main>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Transactions />}></Route>
          <Route path="/logIn" element={<LogIn LogInUser={LogInUser} />}></Route>
          <Route path="/signUp" element={<SignUp LogInUser={LogInUser}/>}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
