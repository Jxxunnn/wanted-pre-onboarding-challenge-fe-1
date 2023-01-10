import React, { useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import LoginPage from "../page/LoginPage/index";
import HomePage from "../page/HomePage";
import { hasToken } from "../utils/handleToken";

export default function Router() {
  const navigate = useNavigate();

  useEffect(() => {
    if (hasToken()) {
      navigate("/");
    } else {
      navigate("/auth");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<LoginPage type="login" />} />
      <Route path="/auth/signUp" element={<LoginPage type="signUp" />} />
      <Route path="/:todoId" element={<HomePage />} />
    </Routes>
  );
}
