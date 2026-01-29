import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 max-w-96 w-full px-2.5"
    >
      <Input type="email" placeholder="Email" name="email" />
      <Input type="text" placeholder="Username" name="username" />
      <Input type="password" placeholder="Password" name="password" />
      <Button type="submit" textContent="submit" />
    </form>
  );
};
