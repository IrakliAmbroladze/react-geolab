import { useForm } from "react-hook-form";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState(null);
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
      localStorage.setItem("token", accessToken);

      const userResponse = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(userResponse);
      setUser(userResponse.data);
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
    <div className="center flex-col">
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
      {user && (
        <h1 className="text-2xl font-bold">Welcome {user.firstName}!</h1>
      )}
    </div>
  );
}
