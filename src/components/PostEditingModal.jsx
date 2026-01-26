import { Modal } from "./Modal";

export const PostEditingModal = ({ handleBtnClick = () => {} }) => {
  return (
    <Modal handleClose={handleBtnClick} hasSaveBtn={true}>
      test modal
    </Modal>
  );
};
