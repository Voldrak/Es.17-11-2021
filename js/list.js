import { render, API } from "./utils.js";

const list = (data) => {
  const elements = data
    .map(
      (item) => 
    `
      <li><div class="filmModCan">
      <div class="film">
        <a href="#view-${item.id}">${item.title}</a> - ${item.year}
      </div>
        <div class="modCan">
        <a class="editA" href="#edit-${item.id}"><button class="edit"></button></a>
        <button class="delete" id="${item.id}"></button>
      </div>
      </div></li>
    `
    )
    .join("");

  const container = document.querySelector("#container");
  render(
    container,
    `
    <p class="elS">Elenco schede film</p>
    <ul>${elements}</ul>
    <a href="#add" id="add">Aggiungi una nuova scheda</a>
    `
  );

  const btns = [...document.querySelectorAll(".delete")];

  const deleteItem = (event) => {
    const id = parseInt(event.target.id);
    const filtered = data.filter((movie) => movie.id !== id);

    fetch(`${API}/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then(() => list(filtered));
  };

  const btnClicks = (btn) =>
    btn.addEventListener("click", deleteItem, { once: true });

  btns.forEach(btnClicks);
};

export { list };