import { useForm } from "react-hook-form";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import axios from "axios";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    const { username, password } = data;
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
        expiresInMins: 30,
      });

      const accessToken = response.data.accessToken;
      console.log("access token is: ", accessToken);
    } catch (error) {
      if (error instanceof Error) {
        console.error("error message is: ", error.message);
      } else {
        console.error("error is: ", error);
      }
    }
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
