

export function SignUp({LogInUser}){
    return(
        <form
        onSubmit={(event) => {
          event.preventDefault();

          const logInDetails = {
            email: event.target.email.value,
            password: event.target.password.value,
          };

          fetch('http://localhost:5000/sign-up', {
            method: 'POST', 
            headers:{
              "content-type": "application/json"
            }, 
            body: JSON.stringify(logInDetails)
          })
          .then(resp=>resp.json())

          console.log(logInDetails);
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