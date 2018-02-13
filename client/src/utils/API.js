import axios from "axios";

export default {
  createUser: function(newUser) {
    return axios.post("/api/users", newUser);
  },
  userSignUp: function(auth0data) {
    return axios.post("/auth/signup", auth0data);
  },
  getUser: function(email) {
    return axios.get("/api/users/" + email);
  },
  createProperty: function(property) {
    return axios.post("/api/properties", property);
  },
  createServiceReq: function(servicereq) {
    return axios.post("/api/servicereqs", servicereq);
  },
  deleteServiceReq: function(id) {
    return axios.delete("/api/servicereqs/" + id);
  },
  getPropertyByLandlord: function (id) {
    return axios.get("/api/properties/findbylandlord/" + id);
  },
  getUnassignedTenants: function() {
    return axios.get("/api/users/findunassignedtenants");
  },
  assignTenant: function(id, tenantUpdate) {
    return axios.put("/api/properties/" + id, tenantUpdate);
  },
  updateTenant: function(id, tenantAssigned) {
    return axios.put("/api/users/" + id, tenantAssigned);
  },
  getServiceReqByProperty: function (properties) {
    return axios.post("/api/servicereqs/findbyproperty", properties);
  },
  getPropertyByTenant: function (id) {
    return axios.get("/api/properties/findbytenant/" + id);
  },
  getServiceReqByTenant: function (id) {
    return axios.get("/api/servicereqs/findbytenant/" + id);
  },
  getAllProperties: function () {
    return axios.get("/api/properties/");
  },
  getAllTenants: function () {
    return axios.get("/api/users/findAllTenants");
  }
};
