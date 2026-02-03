const InputError = ({ children }) => {
  return (
    <p className="text-red-500 text-[12px] px-2 absolute -top-2.5 left-5 bg-white">
      {children}
    </p>
  );
};

export const Input = ({
  type = "text",
  placeholder = "Enter text ... ",
  name = "",
  required = false,
  register,
  errorMessage = "",
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full py-3 px-3.5 border-2 border-[#d0d7de] rounded-lg outline-0 bg-white focus:border-[#5d9eff] focus:shadow-lg transition-all duration-150 ease-in-out"
        required={required}
        {...register(name)}
      />
      {errorMessage && <InputError>{errorMessage}</InputError>}
    </div>
  );
};
