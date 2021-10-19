class Contact {
  id;

  get name() {
    return this.name;
  }
  set name(name) {
    let nameRegex = RegExp("^[A-Z][a-zA-Z]{2}[a-zA-Z\\s]*$");
    if (!nameRegex.test(name)) throw "Name is incorrect";
    else this.name = name;
  }

  get address() {
    return this.address;
  }
  set address(address) {
    address += " ";
    let addressRegex = RegExp("^(.{3,}\\s){2,}$");
    if (!addressRegex.test(address)) throw "Address is incorrect";
    else this.address = address;
  }

  get phone() {
    return this.phone;
  }
  set phone(phone) {
    this.phone = phone;
    let phoneRegex = RegExp("^(\\+\\d{2}|\\d{2})?\\d{10}$");
    if (!phoneRegex.test(phone)) throw "Phone number is incorrect";
    else this.phone = phone;
  }

  get city() {
    return this.city;
  }
  set city(city) {
    this.city = city;
  }

  get state() {
    return this.state;
  }
  set state(state) {
    this.state = state;
  }

  get pincode() {
    return this.pincode;
  }
  set pincode(pincode) {
    this.pincode = pincode;
  }
}
