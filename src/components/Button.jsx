import React from "react";

export default function Button({ text, handleClick }) {
  return <button className="btn" onClick={handleClick}>{text}</button>;
}