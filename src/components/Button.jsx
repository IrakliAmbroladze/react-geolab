export const Button = ({ textContent }) => {
  return (
    <button className="gap-x-1.5 p-2 px-4 bg-blue-500 rounded-md text-white text-xs font-bold cursor-pointer active:scale-95">
      {textContent}
    </button>
  );
};
