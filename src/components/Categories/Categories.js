import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Category from "../Category/Category";

const Categories = () => {
  const { foodCategory } = useParams();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodCategory}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCategories(data.meals));
  }, [foodCategory]);
  return (
    <div className="my-16">
      <h1 className="text-center text-4xl text-indigo-600 font-bold">
        Explore {foodCategory} Foods
      </h1>
      <div className="grid grid-cols-3 place-items-center gap-16 my-16 px-16">
        {categories.map((category) => (
          <Category key={category.idCategory} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
