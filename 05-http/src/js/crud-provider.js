const crudURL = 'https://reqres.in/api/users';


const getUser = async ( id ) => {
  const resp = await fetch(`${ crudURL }/${id}`);
  const { data:user } = await resp.json();
  return user;
};

const createUser = async () => {
  
};

export {
  getUser,
  createUser
};