import { Button } from "./Button";
import { Input } from "./Input";

export const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 max-w-96 w-full px-2.5"
    >
      <Input type="email" placeholder="Email" />
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button type="submit" textContent="submit" />
    </form>
  );
};
