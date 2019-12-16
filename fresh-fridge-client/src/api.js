import axios from 'axios';

export default function login(email, password) {
  console.log(email, password)
  let token = null;
  axios.post('http://localhost:3002/api/users/login', {
    // email: 'synexenel1416@yopmail.com',
    // password: '123'
    email: email,
    password: password
  }).then(function (response) {
    console.log('you have login');
    //suppose the response contain the token?
    token = response.data.token;
  }).catch(function (error) {
    console.log('you haven\'t login');
    console.log(error);
  });
  return token;
}
