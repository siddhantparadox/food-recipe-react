import React from "react";

const Recipeitem = (props) => {
  const { name, image, ingredientLines } = props;
  return (
    <div className="card py2 text-center">
      <img src={image} className="img-fluid mx-auto" alt="Food" />
      <div className="card-body">
        <h5>{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        {ingredientLines.map((ingredient) => (
          <li key={Math.random() * 1256} className="list-group-item">
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Recipeitem;
