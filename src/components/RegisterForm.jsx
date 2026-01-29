import { Input } from "./Input";

export const RegisterForm = () => {
  return (
    <form>
      <Input type="email" placeholder="Email" />
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
    </form>
  );
};
