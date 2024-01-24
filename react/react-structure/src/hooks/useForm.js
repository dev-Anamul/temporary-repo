const params = {
  init: {},
};

function useForm() {}

// helper functions
const mapValuesToState = (values) => {
  return Object.keys(values).reduce((acc, key) => {
    acc[key] = {
      value: values[key],
      error: "",
      focused: false,
      touched: false,
    };
    return acc;
  }, {});
};

export default useForm;
