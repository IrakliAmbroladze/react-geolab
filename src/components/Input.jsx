export const Input = ({
  type = "text",
  placeholder = "Enter text ... ",
  name = "",
  value = "",
  onChange = () => {},
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full py-3 px-3.5 border-2 border-[#d0d7de] rounded-lg outline-0 bg-white focus:border-[#5d9eff] focus:shadow-lg transition-all duration-150 ease-in-out"
    />
  );
};
