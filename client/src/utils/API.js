import axios from "axios";

export default {
  createUser: function(newUser) {
    return axios.post("/api/users", newUser);
  },
  getUser: function(email) {
    return axios.get("/api/users/" + email);
  },
  getPropertyByLandlord: function (id) {
    return axios.get("/api/properties/findbylandlord/" + id);
  },
  getPropertyByTenant: function (id) {
    return axios.get("/api/properties/findbytenant/" + id);
  },
  getServiceReqByLandlord: function (id) {
    return axios.get("/api/servicereqs/findbylandlord/" + id);
  },
  getServiceReqByTenant: function (id) {
    return axios.get("/api/servicereqs/findbytenant/" + id);
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
