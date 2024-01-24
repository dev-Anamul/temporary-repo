import { PropTypes } from "prop-types";
import { InputError, InputGroup, Label, TextInput } from "./TextInput";

function FormGroup({
  label,
  id,
  type,
  value,
  error,
  onChange,
  onFocus,
  onBlur,
}) {
  return (
    <InputGroup>
      <Label htmlFor={id}>{label}</Label>
      <TextInput
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && <InputError>{error}</InputError>}
    </InputGroup>
  );
}

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

FormGroup.defaultProps = {
  error: null,
};

export default FormGroup;
