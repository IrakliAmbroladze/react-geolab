import axios from "axios";
import { useEffect, useState } from "react";

export const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
      );
      setComments(data);
    };
    fetchComments();
  }, [postId]);

  return (
    <div>
      <h3>These are comments</h3>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};
