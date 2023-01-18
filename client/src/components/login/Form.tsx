import { useNavigate } from "react-router-dom";

import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import validate from "../../apis/login/validate";

export default function Form({ type }: { type: string }) {
  const [userData, setUserData] = useState({ id: "", password: "" });
  const navigate = useNavigate();

  const handleInput = (e: ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    if (e.target instanceof HTMLFormElement) {
      e.preventDefault();
      if (e.target["1"] instanceof HTMLInputElement) {
        e.target["1"].value = "";
      }
      if (e.target["2"] instanceof HTMLInputElement) {
        e.target["2"].value = "";
      }
      if (type === "login") {
        validate(userData, type);
        navigate("/");
      }
      if (type === "signUp") {
        validate(userData, type);
        navigate("/auth");
      }
      setUserData({ id: "", password: "" });
    }
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
          minLength={8}
          required
        />
        <input type="submit" value={type} />
      </fieldset>
    </form>
  );
}
