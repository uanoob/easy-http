const http = new easyHTTP();

// Get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// Get post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// Create data
const data = {
  title: 'Pure Javascript',
  body: 'Javascript high ordered function',
};

// Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, response){
//   if (err) {
//      console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// Update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, response){
//   if (err) {
//      console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});