import { User } from "../modules/User.js";
// Modificam nume, email, varsa
let user = new User('1','ion','ion@ion.com',22);
user.doarme(7);
console.log(user);
user.nume = 'Da';
user.email = 'dan@dan.com';
console.log(user);

