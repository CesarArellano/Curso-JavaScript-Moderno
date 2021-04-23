import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtherJoke, olList;

const createJokeHtml = () => {
  const html = `
  <h1 class ="mt-5">Jokes</h1>
  <button class="btn btn-primary">Other joke</button>
  <ol class="mt-2 list-group">
    <li class="list-group-item">...</li>
  </ol>
  `;
  
  const divJokes = document.createElement('div');
  divJokes.innerHTML = html;
  body.append(divJokes);
}

const eventos = () => {
  olList = document.querySelector('ol');
  btnOtherJoke = document.querySelector('button');

  btnOtherJoke.addEventListener('click', async () => {
    btnOtherJoke.disabled = true;
    drawJoke( await obtenerChiste() );
    btnOtherJoke.disabled = false;
  });
}

const drawJoke = ( {id, value} ) => {
  const olItem = document.createElement('li');
  olItem.innerHTML = `<b>${ id }</b>: ${value}`;  
  olItem.classList.add('list-group-item');
  olList.append(olItem);
};

export const init = () => {
  createJokeHtml();
  eventos();
}