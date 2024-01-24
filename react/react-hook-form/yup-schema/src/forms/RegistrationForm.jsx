import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { joiResolver } from "@hookform/resolvers/joi";

const registerSchema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    username: yup.string().required("Username is required"),
    email: yup.string().email().required("Email is required"),
    description: yup.string().required("Description is required"),
  })
  .required();

function RegistrationForm() {
  const {
    clearErrors,
    control,
    formState: { errors },
    getFieldState,
    getValues,
    handleSubmit,
    register,
    reset,
    resetField,
    setError,
    setFocus,
    setValue,
    trigger,
    unregister,
    watch,
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch("firstName"));
  console.log(watch("lastName"));
  console.log(watch("username"));
  console.log(watch("email"));
  console.log(watch("description"));

  console.log(errors);

  return (
    <Row className="justify-content-center" style={{ width: "90vw" }}>
      <Col xs={12} md={8} lg={6}>
        <Form className="w-100" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type your first name"
              {...register("firstName", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type your last name"
              {...register("lastName")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type username"
              {...register("username")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@gmail.com"
              {...register("email")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} {...register("description")} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default RegistrationForm;
