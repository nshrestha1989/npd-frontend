import http from "../http-common";

const getAllProperty = () => {
  return http.get("/property");
};


const createProperty = data => {
  return http.post("/property", data);
};

export { 
  getAllProperty,
  createProperty
}
