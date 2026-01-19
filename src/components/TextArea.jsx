export const TextArea = ({
  type = "text",
  value = "",
  placeholder = "Enter text ...",
  onChange = () => {},
  name = "textarea",
}) => (
  <textarea
    type={type}
    value={value}
    placeholder={placeholder}
    className="border rounded-md p-2 w-full mt-2 mb-4"
    onChange={onChange}
    name={name}
  />
);
