import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { ValidationError } from "./ValidationError";
import axios from "axios";

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      Object.values(validationErrors).forEach((value) => {
        if (value !== "") throw new Error("validation");
      });
      // const response = await axios.post("/register", formData);
      setSuccess("Successfull Login...");
      console.log(formData);
    } catch (error) {
      if (error.message === "validation") {
        setError(
          "Validation error. Registration failed. Please, check all of the inputs",
        );
      } else {
        setError("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="max-w-96 w-full h-full px-2.5">
      <h1 className="text-center text-2xl font-bold my-5">Registration Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-0.5 mb-5">
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />
        <ValidationError>{validationErrors.email}</ValidationError>
        <Input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required={true}
        />
        <ValidationError>{validationErrors.username}</ValidationError>

        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required={true}
        />
        <ValidationError>{validationErrors.password}</ValidationError>
        <Button type="submit" textContent="submit" />
      </form>
      {error && (
        <p className="border border-red-500 px-3 text-red-500 rounded-sm">
          {error}
        </p>
      )}
    </div>
  );
};
