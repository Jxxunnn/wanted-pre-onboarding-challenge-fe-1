import React from "react";

export default function Detail({ title, content, createdAt, updatedAt }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>
        생성 날짜:
        <time>{createdAt}</time>
      </p>
      <p>
        수정 날짜:
        <time>{updatedAt}</time>
      </p>
    </article>
  );
}
