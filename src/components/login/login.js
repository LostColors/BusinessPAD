import React from "react";
import "./login.css";
import { connect } from "react-redux";
import { isLogedIn } from "../../actions";
import { Navigate } from "react-router-dom";
import LoginForm from "./login-form";
import Registration from "./registration";

class Login extends React.Component {
  state = {
    ifAdmin: false,
    wrongLogin: false,
    loginBool: false,
    registerBool: false,
    users: [
      {
        status: "admin",
        name: "Daniyar",
        surname: "Yermakhan",
        email: "admin@mail.com",
        password: "1234",
      },
      {
        status: "manager",
        name: "Nurakhmet",
        surname: "Pidrilov",
        email: "manager@mail.com",
        password: "1111",
      },
    ],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users !== this.state.users) {
      localStorage.setItem("users", JSON.stringify(this.state.users));
    }
  }

  redirectComponent = () => {
    return <Navigate to="/" />;
  };

  onLoginForm = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users"));

    const userClient = users.find(
      (person) => person.email === email && person.password === password
    );
    this.ifAdmin(email, password);
    if (userClient !== undefined) {
      this.props.onLogin();
    } else {
      this.setState({ wrongLogin: true });
    }
  };
  ifAdmin = (email, password) => {
    if (
      (email === "admin@mail.com" && password === "1234") ||
      (email === "manager@mail.com" && password === "1111")
    ) {
      this.setState({ ifAdmin: true });
    }
  };

  onRegistration = (firstName, lastName, email, password) => {
    const newPerson = {
      status: "client",
      name: firstName,
      surname: lastName,
      email,
      password,
    };
    this.setState(
      {
        ...this.state,
        users: [...this.state.users, newPerson],
      },

      () => this.onLoginForm(email, password)
    );
  };

  render() {
    const { logedIn } = this.props;
    if (logedIn && !this.state.ifAdmin) {
      return this.redirectComponent();
    }
    if (logedIn && this.state.ifAdmin) {
      return <Navigate to="/orders" />;
    }
    return (
      <div className="buttons">
        {/* <button className="btn btn-info" onClick={() => onLogin()}>
          Login
        </button> */}
        <button
          onClick={() =>
            this.setState({ loginBool: true, registerBool: false })
          }
          className="btn btn-info"
        >
          Login
        </button>

        <button
          onClick={() =>
            this.setState({ registerBool: true, loginBool: false })
          }
          className="btn btn-info"
        >
          Зарегестрироваться
        </button>
        {this.state.loginBool && <LoginForm onLoginForm={this.onLoginForm} />}
        {this.state.registerBool && (
          <Registration onRegistration={this.onRegistration} />
        )}
        {this.state.wrongLogin && `Неправильный пароль или email!`}
      </div>
    );
  }
}
const mapStateToProps = ({ logedIn }) => {
  return {
    logedIn,
  };
};
const mapDispatchToProps = {
  onLogin: isLogedIn,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
