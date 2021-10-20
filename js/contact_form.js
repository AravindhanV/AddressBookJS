let contactObj = {};
let isUpdate = false;

document.addEventListener("DOMContentLoaded", (event) => {
  const name = document.getElementById("name");
  const nameError = document.querySelector(".name-error");
  name.addEventListener("input", () => {
    try {
      validateName(name.value);
      nameError.textContent = "";
    } catch (e) {
      nameError.textContent = e;
    }
  });

  const phone = document.getElementById("tel");
  const phoneError = document.querySelector(".phone-error");
  phone.addEventListener("input", () => {
    try {
      validatePhone(phone.value);
      phoneError.textContent = "";
    } catch (e) {
      phoneError.textContent = e;
    }
  });

  const address = document.getElementById("address");
  const addressError = document.querySelector(".address-error");
  address.addEventListener("input", () => {
    try {
      validateAddress(address.value);
      addressError.textContent = "";
    } catch (e) {
      addressError.textContent = e;
    }
  });

  checkForUpdate();
});

const checkForUpdate = () => {
  const contactJson = localStorage.getItem("editEmp");
  isUpdate = contactJson ? true : false;
  if (!isUpdate) return;
  contactObj = JSON.parse(contactJson);
  setForm();
};

const setForm = () => {
  setValue("#name", contactObj.name);
  setValue("#phoneNumber", contactObj.phone);
  setValue("#address", contactObj.address);
  setValue("#city", contactObj.city);
  setValue("#state", contactObj.state);
  setValue("#zip", contactObj.pincode);
};

const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.value = value;
};

const validateName = (name) => {
  let nameRegex = RegExp("^[A-Z][a-zA-Z]{2}[a-zA-Z\\s]*$");
  if (!nameRegex.test(name)) throw "Name is incorrect";
};

const validateAddress = (address) => {
  address += " ";
  let addressRegex = RegExp("^(.{3,}\\s){2,}$");
  if (!addressRegex.test(address)) throw "Address is incorrect";
};

const validatePhone = (phone) => {
  let phoneRegex = RegExp("^(\\+\\d{2}|\\d{2})?\\d{10}$");
  if (!phoneRegex.test(phone)) throw "Phone number is incorrect";
};

const submitForm = (e) => {
  e.preventDefault();
  setContactObject();
  createAndUpdateStorage();
};

const resetForm = () => {
  console.log("Form Reset");
};

const setContactObject = () => {
  contactObj.id = new Date().getTime();
  contactObj.name = getInputValue("#name");
  contactObj.address = getInputValue("#address");
  contactObj.phone = getInputValue("#tel");
  contactObj.city = getInputValue("#city");
  contactObj.state = getInputValue("#state");
  contactObj.pincode = getInputValue("#zip");
};

const createAndUpdateStorage = () => {
  let contactList = JSON.parse(localStorage.getItem("ContactList"));

  if (contactList) {
    contactList.push(contactObj);
  } else {
    contactList = [contactObj];
  }
  localStorage.setItem("ContactList", JSON.stringify(contactList));
  window.location.replace(site_properties.home_page);
};

const getInputValue = (selector) => {
  let value = document.querySelector(selector).value;
  return value;
};
