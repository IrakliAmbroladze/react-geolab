import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validations/RegisterValidation";
import { Form } from "./Form";

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
    <Form
      onSubmit={handleSubmit(onSubmit)}
      title="Registration Form"
      isValid={isValid}
      isSubmitting={isSubmitting}
      hasSubmitButton
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
    </Form>
  );
};
