export const TextArea = ({
  type = "text",
  value = undefined,
  placeholder = "Enter text ...",
  onChange = undefined,
  name = "textarea",
  ref = null,
}) => (
  <textarea
    ref={ref}
    type={type}
    value={value}
    placeholder={placeholder}
    className="border rounded-md p-2 w-full mt-2 mb-4"
    onChange={onChange}
    name={name}
  />
);
