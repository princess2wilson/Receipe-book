import React from "react";
import style from "./receipe.module.css";

const receipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.receipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories} Calories </p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default receipe;
