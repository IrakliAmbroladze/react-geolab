import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { CommentInputForm } from "./CommentInputForm";

export const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const commentRef = useRef(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
        );
        setComments(data);
        setIsLoading(false);
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
    const newComment = commentRef.current.value;
    if (newComment.trim().length === 0) return;
    commentRef.current.value = "";
    let id = Math.random();
    setComments([
      { postId: Number(postId), id, name: "", body: newComment },
      ...comments,
    ]);
  };

  return (
    <div>
      {isLoading ? (
        <img
          src={"/assets/loading.gif"}
          alt="loading..."
          width={50}
          height={50}
        />
      ) : (
        <>
          <h3 className="text-2xl font-extrabold tracking-tight text-stone-400 ">
            Comments
          </h3>
          <CommentInputForm createComment={createComment} ref={commentRef} />
          <ul className="bg-gray-200 p-2.5 rounded-md flex flex-col gap-2.5 mt-5">
            {comments.map((comment) => (
              <li
                key={comment.id}
                className="bg-stone-100 p-2.5 flex justify-between items-center gap-2"
              >
                <p>{comment.body}</p>
                <Button
                  handleClick={() => deletePost(comment.id)}
                  bgColor="tomato"
                  textContent="delete"
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
