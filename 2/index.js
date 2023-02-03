const userCard = document.getElementById("user_card");
const followButton = document.getElementById("follow_button");
const userProfile = document.getElementById("user_profile");
const userName = document.getElementById("user_name");
const username = document.getElementById("user_username");
const email = document.getElementById("user_email");
const phone = document.getElementById("user_phone");
const website = document.getElementById("user_website");
const address = document.getElementById("user_address");
const companyName = document.getElementById("user_company_name");
const companyCatchPhrase = document.getElementById("company_catch_phrase");

const url = "https://jsonplaceholder.typicode.com/users/1";

function handleFollowButtonClick(event) {
  event.stopPropagation();
  followButton.classList.toggle("follow_button_color_change");
}

async function handleUserCardClick(event) {
  const response = await fetch(url, { method: "GET" });
  const dataResponse = await response.text();
  const data = JSON.parse(dataResponse);
  userName.innerText = data.name;
  username.innerText = data.username;
  email.innerText = data.email;
  phone.innerText = data.phone;
  website.innerHTML = `<a href=${data.website}>${data.website}</a>`;
  const currentUserAddress = data.address;
  address.innerText = `${currentUserAddress.street}, ${currentUserAddress.suite}, ${currentUserAddress.city}, ${currentUserAddress.zipcode}`;

  const company = data.company;
  companyName.innerText = company.name;
  companyCatchPhrase.innerText = company.catchPhrase;
}
