import axios from "axios";

export function login(email, password) {
  return axios.post("http://localhost:3002/login", {
    email: email,
    password: password
  });
}

export function signup(email, password) {
  return axios.post("http://localhost:3002/signup", {
    email: email,
    password: password
  });
}
