import { Modal } from "./Modal";

export const PostEditingModal = ({ post, handleBtnClick = () => {} }) => {
  return (
    <Modal handleClose={handleBtnClick} hasSaveBtn={true}>
      test modal
    </Modal>
  );
};
