const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const userUrl = 'https://reqres.in/api/users?page=2';

// fetch(jokeUrl)
//   .then( resp => resp.json())
//   .then( ({ id, value }) => {
//     console.log(id, value);
//   });

const obtenerChiste = async () => {

  try {
    const response = await fetch(jokeUrl);
    
    if( !response.ok ) throw 'No se pudo realizar la petición'; 

    const { icon_url, id, value } = await response.json();

    return { icon_url, id, value };
    
  } catch (err) {
    throw err;
  }
  
};

const getUsers = async () => {
  const resp = await fetch(userUrl);
  const { data:users } = await resp.json();
  return users;
};

export {
  obtenerChiste,
  getUsers
}