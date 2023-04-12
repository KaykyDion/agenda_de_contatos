const form = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactDDD = document.getElementById("contact-ddd");
const contactNumber = document.getElementById("contact-number");
const nameList = [];
const numberList = [];
let contactRows = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  newContactRow();
  addContactRow();
  console.log(contactRows);
});

function newContactRow() {
  if (
    nameList.includes(contactName.value) ||
    numberList.includes(contactNumber.value)
  ) {
    document.querySelector(".error-message").style.display = "block";
  } else {
    nameList.push(contactName.value);
    numberList.push(contactNumber.value);
    let contactRow = `<tr>`;
    contactRow += `<td>${contactName.value}</td>`;
    contactRow += `<td>${contactDDD.value}</td>`;
    contactRow += `<td>${contactNumber.value}</td>`;
    contactRow += `</tr>`;

    contactRows += contactRow;
    document.querySelector(".error-message").style.display = "none";
  }

  contactName.value = "";
  contactDDD.value = "";
  contactNumber.value = "";
}

function addContactRow() {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = contactRows;
}
