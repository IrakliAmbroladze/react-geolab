import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { Input } from "./Input";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log("submitted data", data);
  };
  return (
    <div className="max-w-96 w-full h-full px-2.5">
      <h1 className="text-center text-2xl font-bold my-5">Registration Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-0.5 mb-5"
      >
        <input
          type="email"
          placeholder="Email"
          name="email"
          //value={formData.email}
          //onChange={handleChange}
          {...register("email")}
        />
        <Button
          // disabled={isLoading}
          type="submit"
        />
      </form>
      {/* {error && <UImessage type="error">{error}</UImessage>} */}
      {/* {success && <UImessage type="success">{success}</UImessage>} */}
    </div>
  );
};
