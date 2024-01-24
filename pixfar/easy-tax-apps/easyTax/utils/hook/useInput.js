const {useState} = require('react');

const useInput = field => {
  const [input, setInput] = useState(field);

  const handleInputChange = e => {
    e.preventDefault();
    setInput(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  return {input, setInput, handleInputChange};
};

export default useInput;
