import React from "react";
import { useNavigate } from "react-router-dom";
import fruits from "../../data/fruits";
import "./FruitList.scss"; // make sure you import the scss

const FruitList = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>fruit list</h1>


    <div className="fruit-grid">
      {fruits.map((fruit) => (
        <div
          key={fruit.id}
          className="fruit-card"
          onClick={() => navigate(`/fruit/${fruit.id}`)}
        >
          <img src={fruit.image} alt={fruit.name} />
          <p>{fruit.name}</p>
        </div>
      ))}
    </div>


    
    </>
  );
};

export default FruitList;
