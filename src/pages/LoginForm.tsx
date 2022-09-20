export function LogIn() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const logInDetails = {
          email: event.target.email.value,
          password: event.target.password.value,
        };
        console.log(logInDetails);
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
