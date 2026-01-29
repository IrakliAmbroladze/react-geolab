import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { ValidationError } from "./ValidationError";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    email: "",
    username: "",
    password: "",
  });

  const validateInput = (name, value) => {
    switch (name) {
      case "email":
        if (value === "") return "Email is required";
        else if (!value.includes("@")) return "Email must include `@`";
        else if (!value.includes(".")) return "Email must include `.`";
        else return "";
      case "username":
        if (value === "") return "Username is required";
        else if (value.length < 4)
          return "Username must be at least 4 characters long";
        else return "";
      case "password":
        if (value === "") return "Password is required";
        else if (value.length < 8)
          return "Password must be at least 8 characters long";
        else return "";
      default:
        return "";
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setValidationErrors((prev) => ({
      ...prev,
      [name]: validateInput(name, value),
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 max-w-96 w-full px-2.5"
    >
      <Input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required={true}
      />
      {validationErrors.email && (
        <ValidationError>{validationErrors.email}</ValidationError>
      )}
      <Input
        type="text"
        placeholder="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required={true}
      />
      {validationErrors.username && (
        <ValidationError>{validationErrors.username}</ValidationError>
      )}

      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required={true}
      />
      {validationErrors.password && (
        <ValidationError>{validationErrors.password}</ValidationError>
      )}

      <Button type="submit" textContent="submit" />
    </form>
  );
};
