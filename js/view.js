import { render, API } from "./utils.js";

const view = (id = 0) => {
  console.log(id);

  fetch(`${API}/${id}`)
    .then((response) => response.json())
    .then((movie) => {
      const container = document.querySelector("#container");
      render(
        container,
      `<article>
        <h2>${movie.title}</h2>
        <p class="yearsView">${movie.year}</p>
        <img src="${movie.poster}" />
        <p class="descView">${movie.description}</p>
        <hr />
        <div class="backDiv">
        <a href="#" id="back">Torna alla home</a>
        </div>
      </article>`
      );
    });
};

export { view };