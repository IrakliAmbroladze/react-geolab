import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { Input } from "./Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validations/RegisterValidation";
import { Loader } from "lucide-react";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ resolver: yupResolver(schema), mode: "onBlur" });
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("submitted data", data);
    reset({
      email: "",
      username: "",
      password: "",
      confirm_password: "",
    });
  };
  return (
    <div className="max-w-96 w-full h-full px-2.5">
      <h1 className="text-center text-2xl font-bold my-5">Registration Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 mb-5"
      >
        <Input
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          errorMessage={errors.email?.message}
        />
        <Input
          type="text"
          placeholder="Username"
          name="username"
          register={register}
          errorMessage={errors.username?.message}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          errorMessage={errors.password?.message}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirm_password"
          register={register}
          errorMessage={errors.confirm_password?.message}
        />
        <Button
          type="submit"
          textContent={
            isSubmitting ? (
              <Loader strokeWidth={1.5} size={16} className="m-auto" />
            ) : (
              "submit"
            )
          }
          disabled={!isValid || isSubmitting}
        />
      </form>
    </div>
  );
};
