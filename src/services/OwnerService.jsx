import http from "../http-common";


const Ownercreate = data => {
  return http.post("/owner", data);
};

export default Ownercreate;