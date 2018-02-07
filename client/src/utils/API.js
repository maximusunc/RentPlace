import axios from "axios";

export default {
  createUser: function(newUser) {
    return axios.post("/api/users", newUser);
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  createServiceReq: function(servicereq) {
    return axios.post("/api/servicereqs", servicereq);
  },
  createProperty: function(property) {
    return axios.post("/api/properties", property);
  }
  
};
