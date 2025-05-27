import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Posts() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [id]);
  return (
    <>
      <div
        key={post.id}
        className="flex flex-col gap-5 h-screen w-full items-center justify-center rounded-lg shadow-md bg-white  transition hover:shadow-lg  duration-300 py-2 px-5 md:px-10 lg:px-30"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center">
          {post.title}
        </h1>
        <p className="text-center text-base md:text-xl lg:text-2xl">
          {post.body}
        </p>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="w-28 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer shadow-md"
        >
          Go Back
        </button>
      </div>
    </>
  );
}

export default Posts;
