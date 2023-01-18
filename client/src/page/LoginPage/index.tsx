import React from "react";
import { Link } from "react-router-dom";

import Form from "../../components/login/Form";

export default function LoginPage({ type }: { type: string }) {
  return (
    <section>
      <h1>인증 페이지</h1>
      <Form type={type} />
      {type === "login" ? <Link to="signUp">회원가입</Link> : null}
    </section>
  );
}
