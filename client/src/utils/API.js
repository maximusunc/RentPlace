import axios from "axios";

export default {
  createUser: function(newUser) {
    return axios.post("/api/users", newUser);
  },
  getUser: function(email) {
    return axios.get("/api/users/" + email);
  },
  createServiceReq: function(servicereq) {
    return axios.post("/api/servicereqs", servicereq);
  },
  createProperty: function(property) {
    return axios.post("/api/properties", property);
  },
  userSignUp: function(auth0data) {
    return axios.post("/auth/signup", auth0data);
  }
  
};
