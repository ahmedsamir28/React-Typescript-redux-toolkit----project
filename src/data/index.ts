import { IFormInput, ILoginInput, IRegisterInput } from "../Interface/Index";

export const REGISTER_FORM: IRegisterInput[] = [
  {
    name: "username",
    placeholder: "Username",
    type: "text",
    validation: {
      required: true,
      minLength: 5,
    },
  },
  {
    name: "email",
    placeholder: "Email",
    type: "email",
    validation: {
      required: true,
      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    },
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];

export const LOGIN_FORM: ILoginInput[] = [
  {
    name: "identifier",
    placeholder: "Email",
    type: "email",
    validation: {
      required: true,
      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    },
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Title",
    type: "text",
    placeholder :"Name of the meal"
  },
  {
    id: "description",
    name: "description",
    label: "Description",
    type: "text",
    placeholder :"Description of the meal"
  },
  {
    id: "price",
    name: "price",
    label: "Price",
    type: "number",
    placeholder :"Price of the meal"
  },
]