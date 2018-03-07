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
  getPropertyByLandlord: function (id) {
    return axios.get("/api/properties/findbylandlord/" + id);
  },
  getPropertyById: function (id) {
    return axios.get("/api/properites/" + id);
  },
  getPropertyByTenant: function (id) {
    return axios.get("/api/properties/findbytenant/" + id);
  },
  getAllProperties: function () {
    return axios.get("/api/properties/");
  },
  assignTenant: function(id, tenantUpdate) {
    return axios.put("/api/properties/" + id, tenantUpdate);
  },
  updateTenant: function(id, tenantAssigned) {
    return axios.put("/api/users/" + id, tenantAssigned);
  },
  getUnassignedTenants: function() {
    return axios.get("/api/users/findunassignedtenants");
  },
  getAllTenants: function () {
    return axios.get("/api/users/findAllTenants");
  },
  createServiceReq: function(servicereq) {
    return axios.post("/api/servicereqs", servicereq);
  },
  deleteServiceReq: function(id) {
    return axios.delete("/api/servicereqs/" + id);
  },
  getServiceReqByProperty: function (properties) {
    return axios.post("/api/servicereqs/findbyproperty", properties);
  },
  getServiceReqByTenant: function (id) {
    return axios.get("/api/servicereqs/findbytenant/" + id);
  }
};
