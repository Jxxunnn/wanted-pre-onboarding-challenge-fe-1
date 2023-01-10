import React from "react";
import parseTime from "../../utils/handleTime";

export default function Detail({ title, content, createdAt, updatedAt }) {
  return (
    <article>
      <h2>제목: {title}</h2>
      <p>
        <strong>내용: </strong>
        {content}
      </p>
      <p>
        <strong>생성 날짜: </strong>
        <time>{parseTime(createdAt)}</time>
      </p>
      <p>
        <strong>수정 날짜: </strong>
        <time>{parseTime(updatedAt)}</time>
      </p>
    </article>
  );
}
