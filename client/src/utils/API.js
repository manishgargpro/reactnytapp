import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4ef882df201e419684d1da14f37e8634";

export default {
  search: function(query) {
    return axios.get(BASEURL, query);
  },

  getSaved: function() {
    return axios.get("/api/saved");
  },

  saveNew: function(entry) {
    return axios.post("/api/saved", entry);
  },

  delete: function(id) {
    return axios.delete("/api/saved/" + id);
  }

};
