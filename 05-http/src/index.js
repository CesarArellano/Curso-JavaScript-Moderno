// import { init } from "./js/jokes-page";
// import { init } from "./js/usuarios-page";
import * as CRUD from './js/crud-provider';

CRUD.getUser(3).then(console.log);
