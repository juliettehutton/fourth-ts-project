import { User } from "./models/user";

const user = new User({ name: 'bebew', age: 25 });

console.log(user.get('name'));
console.log(user.get('age'));
