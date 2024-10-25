import { User } from "./models/user";

const user = new User({ name: 'coucou', age: 3 });

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');
