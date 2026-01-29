export const UImessage = ({ children, type = "error" }) => {
  const isError = type === "error";
  const isSuccess = type === "success";
  return (
    <p
      className={`border ${isError ? "border-red-500 text-red-500" : isSuccess ? "border-green-500 text-green-500" : "text-black"} rounded-sm p-2.5`}
    >
      {children}
    </p>
  );
};
