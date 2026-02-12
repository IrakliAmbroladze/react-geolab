import { useForm } from "react-hook-form";
import { Form } from "../components/Form";
import { Input } from "../components/Input";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("submitted data", data);
    reset({
      username: "",
      password: "",
    });
  };
  return (
    <div className="center h-full">
      <Form
        isSubmitting={isSubmitting}
        title="Login"
        hasSubmitButton
        onSubmit={handleSubmit(onSubmit)}
      >
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
      </Form>
      ;
    </div>
  );
}
