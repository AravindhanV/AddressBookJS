const validateName = (name) => {
  let nameRegex = RegExp("^[A-Z][a-zA-Z]{2}[a-zA-Z\\s]*$");
  if (!nameRegex.test(name)) throw "Name is incorrect";
};

const validateAddress = (address) => {
  let addressRegex = RegExp("$(.{3,}){2,}^");
  if (!addressRegex.test(address)) throw "Address is incorrect";
};

const validatePhone = (phone) => {
  let phoneRegex = RegExp("$(\\+\\d{2}|\\d{2})?\\d{10}^");
  if (!phoneRegex.test(phone)) throw "Phone number is incorrect";
};
