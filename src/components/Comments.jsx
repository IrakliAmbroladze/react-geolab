import axios from "axios";
import { useEffect, useState } from "react";

export const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [postComments, setPostComments] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments",
      );
      setComments(data);
    };
    fetchComments();
  }, []);
  const singlePostComments = comments.filter(
    (comment) => comment.postId === postId,
  );
  setPostComments(singlePostComments);
  console.log(postComments);
  return <div>These are comments</div>;
};
