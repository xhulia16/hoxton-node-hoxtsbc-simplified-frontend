import { useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { LogIn } from "./pages/LoginForm";
import { PageNotFound } from "./pages/PageNotFound";
import { SignUp } from "./pages/SIgnUpForm";
import { Transactions } from "./pages/Transactions";

type User = {
  id: number;
  email: string;
  password: string;
};

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  function LogInUser(user: User) {
    setCurrentUser(user);
  }

  function LogOutuser() {
    setCurrentUser(null);
  }

  return (
    <div className="App">
      <header>
        <Link to="/home">
          <h1>Hoxt-SBC</h1>
        </Link>

        {currentUser ? (
          <h4>LogOut</h4>
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
          <Route path="/logIn" element={<LogIn />}></Route>
          <Route path="/signUp" element={<SignUp LogInUser={LogInUser}/>}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
