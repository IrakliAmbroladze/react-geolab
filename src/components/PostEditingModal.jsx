import { Button } from "./Button";
import { Modal } from "./Modal";

export const PostEditingModal = ({ handleBtnClick = () => {} }) => {
  return (
    <Modal>
      test modal
      <Button textContent="close" bgColor="gray" handleClick={handleBtnClick} />
    </Modal>
  );
};
