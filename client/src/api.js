import axios from "axios";

export default function login(email, password, done) {
 return axios.post("http://localhost:3002/login", {
      email: email,
      password: password
    });
  
}
