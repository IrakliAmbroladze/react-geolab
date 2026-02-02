import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { ValidationError } from "./ValidationError";
import { UImessage } from "./UImesssage";
import { Loader } from "lucide-react";

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
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
    console.log(formData);
    e.preventDefault();
    try {
      setIsLoading(true);
      Object.values(validationErrors).forEach((value) => {
        if (value !== "") throw new Error("validation");
      });
      // const response = await axios.post("/register", formData);
      setTimeout(() => {
        setIsLoading(false);
        setSuccess("Congrats! you are registered");
        setTimeout(() => {
          setSuccess("");
        }, 2000);
      }, 3000);
    } catch (error) {
      if (error.message === "validation") {
        setError(
          "Validation error. Registration failed. Please, check all of the inputs",
        );
      } else {
        setError("Something went wrong");
      }
      setIsLoading(false);
    } finally {
      setTimeout(() => {
        setError("");
      }, 2000);
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
        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirm_password"
          value={formData.confirm_password}
          onChange={handleChange}
          required={true}
        />
        <ValidationError>{validationErrors.confirm_password}</ValidationError>

        <Button
          disabled={isLoading}
          type="submit"
          textContent={
            isLoading ? (
              <Loader strokeWidth={1.5} size={16} className="m-auto" />
            ) : (
              "submit"
            )
          }
        />
      </form>
      {error && <UImessage type="error">{error}</UImessage>}
      {success && <UImessage type="success">{success}</UImessage>}
    </div>
  );
};
