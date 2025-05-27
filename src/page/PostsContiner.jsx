import React from "react";
import { useState, useEffect } from "react";
import { Alert } from "@mui/material";
import { Link } from "react-router";
function PostsContiner() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setProducts(json));

    // return () => {};
  }, []);
  return (
    <div className="flex flex-col items-center justify-center py-5 gap-5 bg-gray-100 px-5 md:px-10 lg:px-25">
      <h1 className="w-full text-2xl md:text-4xl border-b-2 border-neutral-300 py-5">
        Posts
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 ">
        {products.map((product) => (
          <Link
            to={`/${product.id}`}
            className="no-underline text-black"
            key={product.id}
          >
            <div
              key={product.id}
              className="flex flex-col h-full  items-center  rounded-lg shadow-md bg-white hover:scale-103 transition hover:shadow-lg  duration-300 pb-10"
            >
              <img
                className="w-full h-40 object-cover rounded-t-lg"
                src="https://img.freepik.com/free-photo/top-view-old-french-newspaper-pieces_23-2149318857.jpg?ga=GA1.1.1143795653.1745583610&semt=ais_items_boosted&w=740"
                alt=""
              />
              <h1 className="text-lg font-semibold text-center px-3">
                {product.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PostsContiner;
