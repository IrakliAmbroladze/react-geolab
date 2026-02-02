import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { Input } from "./Input";

export const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm();
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
        className="flex flex-col gap-0.5 mb-5"
      >
        <Input
          type="email"
          placeholder="Email"
          name="email"
          register={register}
        />
        <Input
          type="text"
          placeholder="Username"
          name="username"
          register={register}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          register={register}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirm_password"
          register={register}
        />
        <Button type="submit" />
      </form>
    </div>
  );
};
