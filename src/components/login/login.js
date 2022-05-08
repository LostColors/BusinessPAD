import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => console.log("loged in")}>Login</button>
      </div>
    );
  }
}
export default Login;
