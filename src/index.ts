import { User } from "./models/user";

const user = new User({ id: 5 });

// user.on('change', () => {
//   console.log(user);
// });

user.fetch();

console.log(user);
