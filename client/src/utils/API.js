import axios from "axios";

export default {
  createUser: function(newUser) {
    return axios.post("/api/users", newUser);
  },
  getUser: function(email) {
    return axios.get("/api/users/" + email);
  },
  getAllTenants: function () {
    return axios.get("/api/users/findAllTenants");
  },
  assignTenant: function(id, tenantUpdate) {
    return axios.put("/api/properties/" + id, tenantUpdate);
  },
  getAllProperties: function () {
    return axios.get("/api/properties/");
  },
  getPropertyByLandlord: function (id) {
    return axios.get("/api/properties/findbylandlord/" + id);
  },
  getPropertyByTenant: function (id) {
    return axios.get("/api/properties/findbytenant/" + id);
  },
  getServiceReqByProperty: function (properties) {
    return axios.get("/api/servicereqs/findbyproperty/" + properties);
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
