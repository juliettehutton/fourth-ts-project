import { User } from "./models/user";

const user = new User({ id: 5, name: 'newname', age: 10 });

user.on('save', () => {
  console.log(user);
});

user.save();
