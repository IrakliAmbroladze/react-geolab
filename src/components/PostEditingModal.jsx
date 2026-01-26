import { Button } from "./Button";
import { Modal } from "./Modal";

export const PostEditingModal = ({
  savePost,
  post,
  cancelPostEditing = () => {},
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const body = formData.get("body");
    savePost({ title, body });
  };
  return (
    <Modal handleClose={cancelPostEditing}>
      <form onSubmit={handleSubmit} className="mt-2.5">
        <input
          type="text"
          name="title"
          defaultValue={post.title}
          placeholder="Title"
          className="border rounded-md p-2 w-full"
        />
        <textarea
          name="body"
          type="text"
          defaultValue={post.body}
          placeholder="Body"
          className="border rounded-md p-2 w-full mt-2 mb-4"
        />
        <div className="text-end">
          <Button textContent="save" bgColor="forestgreen" type="submit" />
        </div>
      </form>
    </Modal>
  );
};
