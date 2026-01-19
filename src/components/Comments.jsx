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

  useEffect(() => {
    setPostComments(
      comments.filter((comment) => comment.postId === Number(postId)),
    );
  }, [comments, postId]);

  return (
    <div>
      <h3>These are comments</h3>
      {postComments.map((comment) => (
        <div key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};
