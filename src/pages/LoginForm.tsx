import { useNavigate } from "react-router-dom";
import { User } from "../App";

type Props = {
  LogInUser: (user: User) => void;
};

export function LogIn({ LogInUser }: Props) {

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        
        const logInDetails = {
          email: event.target.email.value,
          password: event.target.password.value,
        };

        console.log(logInDetails);
        fetch("http://localhost:5000/log-in", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(logInDetails),
        })
          .then((resp) => resp.json())
          .then((user) => {
            if (user.error) {
              alert(user.error);
            } else {
              LogInUser(user);
            }
          })

        event.target.reset();
      }}
    >
      <h3>Please enter your credentials</h3>
      <input name="email" placeholder="email..."></input>
      <input name="password" placeholder="password..." type="password"></input>
      <button>Login</button>
    </form>
  );
}
