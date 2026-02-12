import { Form } from "../components/Form";
import { Input } from "../components/Input";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div className="center h-full">
      <Form title="Login" hasSubmitButton onSubmit={handleSubmit}>
        <Input type="text" placeholder="Username" name="username" />
        <Input type="password" placeholder="Password" name="password" />
      </Form>
      ;
    </div>
  );
}
