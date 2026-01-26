import { Button } from "./Button";
import { Modal } from "./Modal";

export const PostEditingModal = ({ post, handleBtnClick = () => {} }) => {
  console.log("Post is: ", post);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const body = formData.get("body");
    console.log("title is: ", title);
    console.log("body is: ", body);
  };
  return (
    <Modal handleClose={handleBtnClick}>
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
