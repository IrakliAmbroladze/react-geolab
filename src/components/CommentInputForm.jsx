import { useState } from "react";
import { Button } from "./Button";
import { TextArea } from "./TextArea";

export const CommentInputForm = ({ createComment }) => {
  const [text, setText] = useState("");
  return (
    <form onSubmit={createComment} className="flex flex-col w-[300px]">
      <TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        name="comment"
      />
      <Button type="submit" textContent="create comment" />
    </form>
  );
};
