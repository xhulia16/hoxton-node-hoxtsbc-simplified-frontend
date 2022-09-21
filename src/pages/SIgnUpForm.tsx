import {useNavigate } from "react-router-dom";
import { User } from "../App";

type Props={
  LogInUser: (user: User)=> void
}

export function SignUp({LogInUser}: Props){
  
  let navigate = useNavigate();

    return(
        <form
        onSubmit={(event) => {
          event.preventDefault();

          const signUpDetails = {
            email: event.target.email.value,
            password: event.target.password.value,
          };

          fetch('http://localhost:5000/sign-up', {
            method: 'POST', 
            headers:{
              "content-type": "application/json"
            }, 
            body: JSON.stringify(signUpDetails)
          })
          .then(resp=>resp.json())
          .then(data=> {
            if(data.error){
              alert(data.error)
            }
            else{
              LogInUser(data)
            }
          })
          .then(data=> navigate("/home"))

          console.log(signUpDetails);
          event.target.reset();
        }}
      >
        <h3>Please enter your credentials</h3>
        <input name="email" placeholder="email..."></input>
        <input name="password" placeholder="password..." type="password"></input>
        <button>Sign Up</button>
      </form>
    )
}