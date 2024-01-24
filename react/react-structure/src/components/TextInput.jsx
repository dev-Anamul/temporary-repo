import styled from "styled-components";

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  padding: 0.375rem 0.75rem;
  text-align: center;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
`;

const TextInput = styled.input`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  cursor: text;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  padding: 0.375rem 0.75rem;
  text-align: left;
  text-decoration: none;
  user-select: text;
  vertical-align: middle;
  white-space: nowrap;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 20rem;
`;

const Fieldset = styled.fieldset`
  border: 0;
  margin: 0;
  padding: 0;
`;

const Legend = styled.legend`
  color: #333;
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  padding: 0;
`;

const FormWrapper = styled.div`
  /* background-color: #f5f5f5; */
  min-height: 100vh;
  padding: 2rem 0;
`;

const FormContainer = styled.div`
  /* background-color: #fff; */
  border-radius: 4px;
  margin: 0 1rem;
  max-width: 20rem;
  /* padding: 2rem 1rem; */
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const InputError = styled.div`
  color: red;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

export {
  Button,
  TextInput,
  Label,
  Form,
  Fieldset,
  Legend,
  FormWrapper,
  FormContainer,
  InputGroup,
  InputError,
};
