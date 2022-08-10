import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, id, thumbnail, description}) {
  return (
    <Link to={`/${id}`} >
      <div className="card">
        <div>
        <img  src={thumbnail} alt="thumbnail" />
        </div>
        <div className="card-detail">
        <h1 className="card-name">{name}</h1>
        <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}