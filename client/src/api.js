import axios from 'axios';

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

export function getRecipesByMemberId({memberId}) {
  const token = localStorage.getItem('accessToken');

  return instance.get(`v1/recipes/members/${memberId}`, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}


export function getRecipesById({recipeId}) {
  const token = localStorage.getItem('accessToken');

  return instance.get(`v1/recipes/${recipeId}`, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
