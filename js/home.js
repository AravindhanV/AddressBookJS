let contactList;
window.addEventListener("DOMContentLoaded", (event) => {
  contactList = getContactDataFromStorage();
  document.querySelector(".addr-count").textContent = contactList.length;
  createInnerHtml();
  localStorage.removeItem("editContact");
});

const getContactDataFromStorage = () => {
  return localStorage.getItem("ContactList")
    ? JSON.parse(localStorage.getItem("ContactList"))
    : [];
};
const createInnerHtml = () => {
  const headerHtml = `
  <thead>
            <tr>
              <th style="width: 20%">
                Fullname
              </th>
              <th style="width: 30%">
                Address
              </th>
              <th style="width: 9%">
                City
              </th>
              <th style="width: 10%">
                State
              </th>
              <th style="width: 9%">
                Zip Code
              </th>
              <th style="width: 12%">
                Phone Number
              </th>
              <th></th>
            </th>
          </thead>`;
  if (contactList.length == 0) return;
  let innerHtml = `${headerHtml}`;
  for (const contactData of contactList) {
    console.log(contactData);
    innerHtml = `${innerHtml}
          <tr>
          <td>${contactData.name}</td>
          <td>${contactData.address}</td>
          <td>${contactData.city}</td>
          <td>${contactData.state}</td>
          <td>${contactData.pincode}</td>
          <td>${contactData.phone}</td>
          <td>
          <img id="1" onclick="remove(this)" alt="delete" src="../assets/delete_contact.svg">
          <img id="1" alt="edit" onclick="update(this)" src="../assets/edit_contact.svg">
          </td>
          </tr>
          `;
  }
  document.querySelector("#table-display").innerHTML = innerHtml;
};
