import { Button } from "./Button";

export const Modal = ({ children, handleClose = () => {} }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex flex-col items-center justify-center z-50">
      <div className="bg-white max-w-125 w-full p-4 rounded-md">
        <div className="text-end">
          <Button textContent="X" bgColor="tomato" handleClick={handleClose} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
