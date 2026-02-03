import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { Input } from "./Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validations/RegisterValidation";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onBlur" });
  const onSubmit = async (data) => {
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
        <div className="relative">
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={register}
          />
          {errors.email && (
            <p className="text-red-500 text-[12px] px-2 absolute -top-2.5 left-5 bg-white">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="relative">
          <Input
            type="text"
            placeholder="Username"
            name="username"
            register={register}
          />
          {errors.username && (
            <p className="text-red-500 text-[12px] px-2 absolute -top-2.5 left-5 bg-white">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="relative">
          <Input
            type="password"
            placeholder="Password"
            name="password"
            register={register}
          />
          {errors.password && (
            <p className="text-red-500 text-[12px] px-2 absolute -top-2.5 left-5 bg-white">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="relative">
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            register={register}
          />

          {errors.confirm_password && (
            <p className="text-red-500 text-[12px] px-2 absolute -top-2.5 left-5 bg-white">
              {errors.confirm_password.message}
            </p>
          )}
        </div>
        <Button type="submit" />
      </form>
    </div>
  );
};
