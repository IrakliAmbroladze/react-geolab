import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(name);
    console.log(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 max-w-96 w-full px-2.5"
    >
      <Input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required={true}
      />
      <Input
        type="text"
        placeholder="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required={true}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required={true}
      />
      <Button type="submit" textContent="submit" />
    </form>
  );
};
