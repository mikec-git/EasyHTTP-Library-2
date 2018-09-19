const http = new EasyHTTP();

// Get users
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data));

// User data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
};

// Post data
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data));

// Update data
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data));

// Delete data
// http.delete('https://jsonplaceholder.typicode.com/users/2')
// .then(data => console.log(data));