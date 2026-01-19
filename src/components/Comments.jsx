import axios from "axios";
import { useEffect, useState } from "react";

export const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments",
      );
      console.log("comments are", data);
    };
    fetchComments();
  }, []);
  return <div>These are comments</div>;
};
