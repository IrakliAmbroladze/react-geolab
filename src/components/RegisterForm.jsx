import { Input } from "./Input";

export const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-2 max-w-96 w-full">
      <Input type="email" placeholder="Email" />
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
    </form>
  );
};
