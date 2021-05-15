const handleThrow = (code, name, message) => {
  throw {
    code,
    name,
    message,
  };
};

export { handleThrow };
