import { useNavigate } from "react-router-dom";

import React, { useState, useRef } from "react";
import validate from "../../apis/login/validate";

export default function Form({ type }) {
  const [userData, setUserData] = useState({ id: "", password: "" });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target["1"].value = "";
    e.target["2"].value = "";

    if (type === "login") {
      validate(userData, type);
      navigate("/");
    }
    if (type === "signUp") {
      validate(userData, type);
      navigate("/auth");
    }
    setUserData({ id: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      <fieldset>
        <legend>{type}</legend>
        <label htmlFor="id">아이디 :</label>{" "}
        <input
          onChange={handleInput}
          type="email"
          id="id"
          name="id"
          pattern="^[^@]+@[^@]+\.[^@]+$"
          required
        />
        <br />
        <label htmlFor="password">비밀번호 :</label>
        <input
          onChange={handleInput}
          type="password"
          id="password"
          name="password"
          minLength="8"
          required
        />
        <input type="submit" value={type} />
      </fieldset>
    </form>
  );
}
