export const Button = ({ textContent, bgColor }) => {
  return (
    <button
      className="gap-x-1.5 p-2 px-4 rounded-md text-white text-xs font-bold cursor-pointer active:scale-95"
      style={{
        backgroundColor: bgColor,
      }}
    >
      {textContent}
    </button>
  );
};
