import React from "react";
import { useParams } from "react-router-dom";
import fruits from "../../data/fruits";

import "./FruitDetail.scss"; // make sure you import the scss


const FruitDetail = () => {
  const { id } = useParams();
  const fruit = fruits.find((f) => f.id === id);

  if (!fruit) {
    return <h2>Fruit not found</h2>;
  }

  return (
    <div className="fruit-detail">
      <h1>{fruit.name}</h1>
      <img src={fruit.image} alt={fruit.name} />
      <h1>{fruit.dsort}</h1>
      <p>{fruit.description}</p>
    </div>
  );
};

export default FruitDetail;
