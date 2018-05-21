import axios from 'axios';

function login(email, password) {
  console.log(email, password)
  axios.post('http://localhost:3002/api/users/login', {
    // email: 'synexenel1416@yopmail.com',
    // password: '123'
    email: email,
    password: password
  }).then(function (response) {
    console.log('you have login');
  }).catch(function (error) {
    console.log('you haven\'t login');
    console.log(error);
  });

}

export default {
  login
}
