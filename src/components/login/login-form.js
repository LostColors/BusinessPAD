import React, { useState } from "react";

export const LoginForm = ({ onLoginForm }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = () => {
    onLoginForm(email, password);
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="email">
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="password">
          <input
            className="form__input"
            type="password"
            id="password"
            placeholder="Пароль"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
      <div className="footer">
        <button
          onClick={() => handleSubmit()}
          type="submit"
          className="btn btn-info"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
