import axios from "axios";

export default {
  createUser: function(newUser) {
    return axios.post("/api/users", newUser);
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  }
  
};
