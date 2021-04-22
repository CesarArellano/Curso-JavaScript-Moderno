(async () => {

  const getCharacters = async ( {name, status = 'alive'} ) => {
    const urlApi = `https://rickandmortyapi.com/api/character/?name=${ name }&status=${ status }`;
  
    const data = await fetch(urlApi);
    const characters = await data.json();
  
    return characters.results;
  }
  
  const params = {
    name: 'Rick'
  } 
  const dataCharacters = await getCharacters(params);
  console.log(dataCharacters);

})();