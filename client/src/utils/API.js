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
  getServiceReqByLandlord: function (id) {
    return axios.get("/api/servicereqs/findbylandlord/" + id);
  },
  createServiceReq: function(servicereq) {
    return axios.post("/api/servicereqs", servicereq);
  },
  createProperty: function(property) {
    return axios.post("/api/properties", property);
  }
  
};
