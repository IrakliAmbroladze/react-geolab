import { Button } from "./Button";

export const CommentInputForm = ({ createComment }) => {
  return (
    <form onSubmit={createComment} className="flex flex-col w-[300px]">
      <div>This is an input form</div>
      <Button type="submit" />
    </form>
  );
};
