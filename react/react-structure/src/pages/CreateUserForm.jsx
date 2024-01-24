import { useState } from "react";
import FormGroup from "../components/FormGroup";
import {
  Button,
  Form,
  FormContainer,
  FormWrapper,
} from "../components/TextInput";
const initialState = {
  name: {
    value: "",
    error: null,
    focus: false,
  },
  email: {
    value: "",
    error: null,
    focus: false,
  },
  phone: {
    value: "",
    error: null,
    focus: false,
  },
  password: {
    value: "",
    error: null,
    focus: false,
  },
};

const validate = (formState) => {
  const { name, email, phone, password } = formState;
  const errors = {};
  if (!name.value) {
    errors.name = "Name is required";
  }
  if (!email.value) {
    errors.email = "Email is required";
  }
  if (!phone.value) {
    errors.phone = "Phone is required";
  }
  if (!password.value) {
    errors.password = "Password is required";
  }
  return {
    errors: errors,
    isValid: Object.keys(errors).length === 0,
  };
};

function CreateUserForm() {
  const [formState, setFormState] = useState({ ...initialState });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        value,
      },
    }));

    const { errors } = validate(formState);

    console.log(errors);

    if (formState[id].focus) {
      console.log("i am calling inside ", formState[id].focus);

      setFormState((prevState) => ({
        ...prevState,
        [id]: {
          ...prevState[id],
          error: errors[id],
        },
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [id]: {
          ...prevState[id],
          error: null,
        },
      }));
    }
  };

  const handleFocus = (event) => {
    const { id } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        focus: true,
      },
    }));
  };

  const handleBlur = (event) => {
    const { id } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        focus: false,
      },
    }));

    const { errors } = validate(formState);

    setFormState((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        error: errors[id],
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { isValid, errors } = validate(formState);

    const submitObject = Object.keys(formState).reduce((acc, key) => {
      acc[key] = formState[key].value;
      return acc;
    }, {});

    if (isValid) {
      console.log("Form is valid" + JSON.stringify(submitObject));
    } else {
      console.log("Form is invalid" + JSON.stringify(errors));
    }
  };

  return (
    <FormContainer>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <FormGroup
            label={"Name"}
            id={"name"}
            type={"text"}
            error={formState.name.error}
            value={formState.name.value}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <FormGroup
            label={"Email"}
            id={"email"}
            type={"email"}
            error={formState.email.error}
            value={formState.email.value}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <FormGroup
            label={"Phone"}
            id={"phone"}
            type={"tel"}
            error={formState.phone.error}
            value={formState.phone.value}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <FormGroup
            label={"Password"}
            id={"password"}
            type={"password"}
            error={formState.password.error}
            value={formState.password.value}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button type="submit">Submit</Button>
            <Button type="reset">Reset</Button>
          </div>
        </Form>
      </FormWrapper>
    </FormContainer>
  );
}

export default CreateUserForm;
