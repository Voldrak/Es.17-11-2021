import { API } from "./utils.js";
import { list } from "./list.js";
import { add } from "./add.js";
import { view } from "./view.js"
import { edit } from "./edit.js"



const loadList = () =>
fetch(API)
  .then((response) => {
    if (response.status === 404) {
      console.error(
        "READ HERE: Could not load remote data, is the server on?"
      );
      document.querySelector(".alert").classList.add("show");
    } else {
      return response.json();
    }
  })
  .then((data) => list(data));

document.addEventListener("DOMContentLoaded", loadList);

const getId = () => parseInt(location.hash.split("-")[1]);

window.addEventListener("hashchange", () => {
//console.log("hash has changed", location.hash);
const destination = location.hash.split("-")[0];

switch (destination) {
  case "#add":
    add();
    break;
  case "#view":
    view(getId());
    break;
  case "#edit":
    edit(getId());
    break;
  case "":
    loadList();
    break;
}
});



