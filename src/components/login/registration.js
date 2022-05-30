import React, { useState } from "react";

const Registration = ({ onRegistration }) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = () => {
    onRegistration(firstName, lastName, email, password);
  };
  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <input
            className="form__input"
            type="text"
            id="firstName"
            placeholder="First Name"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="lastname">
          <input
            type="text"
            name=""
            id="lastName"
            className="form__input"
            placeholder="LastName"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
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
            placeholder="Password"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="confirm-password">
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
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
          Register
        </button>
      </div>
    </div>
  );
};
export default Registration;
