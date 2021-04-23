const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const userUrl = 'https://reqres.in/api/users?page=2';

//Cloudinary
const cloudUrl = 'https://api.cloudinary.com/v1_1/dpvsseupu/image/upload?upload_preset=fvps6qmz';
const cloudPreset = 'fvps6qmz';
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

const uploadImage = async (uploadFile) => {
  const formData = new FormData(); // Object already send.
  formData.append('upload_preset', cloudPreset);
  formData.append('file', uploadFile);
  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    });
    if ( resp.ok ) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch( err ) {
    throw err;
  }
};

export {
  obtenerChiste,
  getUsers,
  uploadImage
}