const http = new EasyHTTP();

// GET users
// http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// User data
const user = {
  name: 'John',
  username: 'Doe',
};

// Create user
// http
//   .post('https://jsonplaceholder.typicode.com/users', user)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update user
http
  .put('https://jsonplaceholder.typicode.com/users/1', user)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Delete user
http
  .put('https://jsonplaceholder.typicode.com/users/10')
  .then(data => console.log(data))
  .catch(err => console.log(err));
