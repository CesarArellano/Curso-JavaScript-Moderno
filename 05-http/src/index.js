const jokeUrl = 'https://api.chucknorris.io/jokes/random';

fetch(jokeUrl).then(async resp => {
  const decodedData = await resp.json();
  console.log(decodedData.value);
});