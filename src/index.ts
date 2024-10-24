import { User } from "./models/user";

const user = new User({ name: 'bebew', age: 25 });

user.on('allo', () => {
  console.log('coucou');
});
user.on('allo', () => {
  console.log('yiha');
});

user.trigger('allo');
