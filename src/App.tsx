import { useState } from "react";
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

  function LogInUser(user: User) {
    setCurrentUser(user);
  }

  function logOutUser() {
    setCurrentUser(null);
  }

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
