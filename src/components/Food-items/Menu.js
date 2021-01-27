import React from "react";
import { Link } from "react-router-dom";
import { CardBox } from "../styles/StyleMenu";

const Menu = ({ food, slug }) => {
  const { image, name, title, price, id } = food;
  return (
    <CardBox className={`card-box col-lg-4 active-box-${slug}`}>
      <div className="card">
        <div className="card-body text-center">
          <img src={image.url} alt={name} className="img-fluid" />
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{title}</p>
          <h4>
            <strong>R$ {price}</strong>
          </h4>
        </div>
      </div>
    </CardBox>
  );
};

export default Menu;
