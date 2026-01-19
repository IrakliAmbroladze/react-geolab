import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../constants/products";
import { Comments } from "../components/Comments";

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.log("error is ", error);
      }
    };
    fetchData();
  }, [id]);
  const { title, body, tags } = post;
  return (
    <div className="flex flex-col gap-5 p-10">
      <h1 className="text-2xl font-bold text-center ">{title}</h1>
      <p>{body}</p>
      {tags && (
        <div className="flex gap-2">
          <span className="font-bold">TAGS:</span>
          {tags.map((tag) => (
            <span key={tag} className="border rounded-sm px-2">
              {tag}
            </span>
          ))}
        </div>
      )}
      <Comments />
    </div>
  );
};
