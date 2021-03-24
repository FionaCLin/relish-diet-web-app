import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/v1/users",
  headers: { 'content-type': 'application/json' },
  timeout: 5000
});

export async function login({ username, password }) {
  return instance.post("/login", {
    username: username,
    password: password
  });
};

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
