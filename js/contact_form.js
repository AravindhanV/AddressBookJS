const validateName = (name) => {
  let nameRegex = RegExp("^[A-Z][a-zA-Z]{2}[a-zA-Z\\s]*$");
  if (!nameRegex.test(name)) throw "Name is incorrect";
};
