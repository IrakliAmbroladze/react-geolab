export const Input = ({ type = "text", placeholder = "Enter text ... " }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full py-3 px-3.5 border-2 border-[#d0d7de] rounded-lg outline-0 bg-white focus:border-[#4f46e5] focus:shadow-lg transition-all duration-150 ease-in-out"
    />
  );
};
