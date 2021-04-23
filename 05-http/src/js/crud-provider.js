const crudURL = 'https://reqres.in/api/users';


const getUser = async ( id ) => {
  const resp = await fetch(`${ crudURL }/${id}`);
  const { data:user } = await resp.json();
  return user;
};

const createUser = async ( user ) => {
  const resp = await fetch(crudURL, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data  = await resp.json();
  return data;
};

const updateUser = async ( id, user) => {
  const resp = await fetch(`${ crudURL }/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data = await resp.json();
  return data;
};

const deleteUser = async ( id ) => {
  const resp = await fetch(`${ crudURL }/${id}`, {
    method: 'DELETE'
  });
  return (resp.ok) ? 'Deleted' : 'Could not delete'
};

export {
  getUser,
  createUser,
  updateUser,
  deleteUser
};