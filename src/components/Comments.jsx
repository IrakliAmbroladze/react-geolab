import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { CommentInputForm } from "./CommentInputForm";

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

  const createComment = async (e) => {
    e.preventDefault();
    console.log("clicked button in form");
  };

  return (
    <div>
      <h3 className="text-2xl font-extrabold tracking-tight text-stone-400 ">
        Comments
      </h3>
      <CommentInputForm createComment={createComment} />
      <ul className="bg-gray-200 p-2.5 rounded-md flex flex-col gap-2.5">
        {comments.map((comment) => (
          <li key={comment.id} className="bg-stone-100 p-2.5">
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
            <Button
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
