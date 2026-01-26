import { useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { Loader } from "lucide-react";

export const PostEditingModal = ({
  savePost,
  post,
  cancelPostEditing = () => {},
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    setIsLoading(true);
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
        <div className="flex justify-end">
          <Button
            textContent={
              isLoading ? <Loader width="24px" height="15px" /> : "save"
            }
            bgColor="forestgreen"
            type="submit"
          />
        </div>
      </form>
    </Modal>
  );
};
