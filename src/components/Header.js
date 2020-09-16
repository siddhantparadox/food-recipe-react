import React from "react";

const Recipes = (props) => {
  const { search, onInputChange, onSearchClick } = props;
  return (
    <div className="jumbotron">
      <h1 className="display-1">Food Recipe Ingredients Finder</h1>
      <div className="input-group mb-3 mx-auto w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Search your recipe"
          value={search}
          onChange={onInputChange}
        />
        <div className="input-group-append">
          <button
            type="button"
            className="btn btn-light"
            onClick={onSearchClick}
          >
            Search Recipe
          </button>
        </div>
      </div>
    </div>
  );
};
export default Recipes;
