export const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white max-w-[500px] w-full p-4 rounded-md">
        {children}
      </div>
    </div>
  );
};
