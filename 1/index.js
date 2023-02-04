const button = document.getElementById("add_to_list");
const inputField = document.getElementById("user_input");
const list = document.getElementById("list");

function addItemToList() {
  let inputValue = inputField.value.trim();
  if (!inputValue) {
    return;
  }

  const newListItem = document.createElement("li");
  newListItem.setAttribute("class", "list_item");
  const id = Date.now().toString();
  newListItem.setAttribute("id", id);
  newListItem.setAttribute("onclick", `removeItem(${id})`);
  newListItem.innerText = inputValue;
  list.insertBefore(newListItem, list.firstChild);
  inputField.value = "";
}

button.addEventListener("click", addItemToList);

inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addItemToList();
  }
});

function removeItem(elementId) {
  const listItem = document.getElementById(elementId);
  listItem.classList.toggle("remove_list_item");
  setTimeout(() => listItem.parentElement.removeChild(listItem), 500);
}
