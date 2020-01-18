import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3002/",
  timeout: 1000
});

export function login(email, password) {
  return instance.post("login", {
    email: email,
    password: password
  });
}

export function signup(email, password) {
  return instance.post("signup", {
    email: email,
    password: password
  });
}

export function profileUpdate(user_id, tokenKey, payload) {
  return instance.put(`api/users/${user_id}`, payload, {
    headers: { Authorization: `Bearer ${tokenKey}` }
  });
}
