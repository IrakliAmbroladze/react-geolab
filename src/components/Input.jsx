export const Input = ({
  type = "text",
  placeholder = "Enter text ... ",
  name = "",
  required = false,
  register,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="w-full py-3 px-3.5 border-2 border-[#d0d7de] rounded-lg outline-0 bg-white focus:border-[#5d9eff] focus:shadow-lg transition-all duration-150 ease-in-out"
      required={required}
      {...register(name)}
    />
  );
};
