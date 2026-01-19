import { Button } from "./Button";
import { TextArea } from "./TextArea";

export const CommentInputForm = ({ createComment, ref }) => {
  console.log("render input");
  return (
    <form onSubmit={createComment} className="flex flex-col w-[300px]">
      <TextArea name="comment" ref={ref} />
      <Button type="submit" textContent="create comment" />
    </form>
  );
};
