import { NewUser, Abonat } from "../modules/NewUser.js";
// Modificam nume, email, varsa
let user = new NewUser('1','ion','ion@ion.com',22);
// user.doarme(7);
// console.log(user);
// user.nume = 'Ivan';
// user._id = 33;
// user.varsta = 19; 
// console.log(user.varsta );

let abonat = new Abonat('2','dan', 'dan@dan.com');
//abonat.varsta =33; //Error
//abonat.password ='6789'; //Error

console.log(abonat.doarme(6));
console.log(abonat.mananca(250));