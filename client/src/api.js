import axios from 'axios';

const token =
  'eyJraWQiOiJQaENvVWpUQzBsV2tka2hCTXYxREYrSzdEN2kzT0dGWERXSXMzSlpta25rPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZDYxODFjNy1hYjI0LTRhNTQtOWI2My05NTMwYWRmYjJkYjkiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2QxQW5XdXNLeiIsImNvZ25pdG86dXNlcm5hbWUiOiJmbGluIiwiZ2l2ZW5fbmFtZSI6IkZpb25hIiwiYXVkIjoiNGM5OWhzdHU3aWIxMTZxY3FkZmttYTg0a24iLCJldmVudF9pZCI6IjU4Y2E4NDgwLWM1YjctNDI3Zi05ZDY3LTFhN2JkYmU3OWI3MiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjMwMDY4NDU5LCJleHAiOjE2MzAwNzIwNTksImlhdCI6MTYzMDA2ODQ1OSwiZmFtaWx5X25hbWUiOiJMaW4iLCJlbWFpbCI6ImZpb25hLmxpbjEwMDFAZ21haWwuY29tIn0.ESazXR2ryGAdZ9cgXrAdlwhkka92S-dlpUe4Rkrcy8w8p3rBuhbn3SDeFwGFG7Qp-Ts5-bdWzDdSbbISZnhsyIaNbx12Ixrk2-1DszFyECmcmwMytc0ikLDReaXogRAMXD0zKEO6EWotczSDQdKW8bZQJRSv5pJ7U0SXkuPiylRX5CJZVQZZGKiF7YKXGd2xtbMPWS1cH8jmuJb-4x-BMjbVw072zql7bm3wHzDov4ujZgjzqGmTcYQKiXjm3MAFIzxRfl6PHPhtHlvO8dlQil32_nmSc_p7_E7GGfjhngneMVyqENfN53pmEqt6ALqgKA3O2dyfYkicidpHQuOr4g';
const instance = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {'content-type': 'application/json'},
  timeout: 5000,
});

export async function login({username, password}) {
  return instance.post('login', {
    username: username,
    password: password,
  });
}

export function signup(email, password) {
  return instance.post('v1/users/signup', {
    email: email,
    password: password,
  });
}

export function getProfile(user) {
  const {email} = user.attributes;
  const token = user.signInUserSession.accessToken.jwtToken;
  return instance.get(`v1/users/${email}/profile`, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

export function profileUpdate(user_id, values) {
  const token = localStorage.getItem('accessToken');
  console.log(user_id, token, values);
  return instance.put(`v1/users/${user_id}/profile`, values, {
    headers: {Authorization: `Bearer ${token}`},
  });
}

export function uom() {
  const token = localStorage.getItem('accessToken');
  return instance.get(`v1/recipes/uom`, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}