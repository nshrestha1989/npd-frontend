import http from "../http-common";

const getAll = () => {
  return http.get("/property");
};


const create = data => {
  return http.post("/property", data);
};

export default create;