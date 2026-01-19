import { Button } from "./Button";
import { TextArea } from "./TextArea";

export const CommentInputForm = ({ createComment }) => {
  return (
    <form onSubmit={createComment} className="flex flex-col w-[300px]">
      <TextArea />
      <Button type="submit" textContent="create comment" />
    </form>
  );
};
