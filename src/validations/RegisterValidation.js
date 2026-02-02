import { object, string } from "yup";

export const schema = object({
  email: string("input must be a text type")
    .required("email is required")
    .email("input is not a valid email"),

  username: string("input must be a text type")
    .required("username is required")
    .min(3, "min symbols required is 3")
    .max(15, "max symbols required is 15"),

  password: string("input must be a text type")
    .required("password is required")
    .min(8, "password must have at least 8 symbols"),
});
