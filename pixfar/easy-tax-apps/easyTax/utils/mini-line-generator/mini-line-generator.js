const lineShorter = (text, number) => {
  if (text.length > number) {
    return text.substring(0, number) + '...';
  } else {
    return text;
  }
};

export default lineShorter;
