// import { init } from "./js/jokes-page";
import { getUsers } from "./js/http-provider";

// init();

getUsers().then(console.log);