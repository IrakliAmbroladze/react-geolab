import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "./Button";

export const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
        );
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [postId]);

  const deletePost = async (id) => {
    try {
      /* await axios.delete(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
      );*/
      setComments((prev) => prev.filter((comment) => comment.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>These are comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
            <Button
              className="border cursor-pointer rounded-md p-2 bg-red-800"
              handleClick={() => deletePost(comment.id)}
              bgColor="tomato"
              textContent="delete"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
