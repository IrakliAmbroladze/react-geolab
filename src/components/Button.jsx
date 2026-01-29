export const Button = ({
  textContent = "click",
  bgColor = "#00008B",
  handleClick = () => {},
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`gap-x-1.5 p-2 px-4 rounded-md text-white text-xs font-bold cursor-pointer active:scale-95 transition-transform ease-in-out duration-150 disabled:scale-100 disabled:opacity-60 disabled:cursor-auto`}
      style={{
        backgroundColor: bgColor,
      }}
      onClick={handleClick}
    >
      {textContent}
    </button>
  );
};
