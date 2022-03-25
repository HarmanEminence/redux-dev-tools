import { GET_USERS } from "../type/index";

const getUsers = () => {
  console.log("ppppppp", payload);
  return {
    type: GET_USERS,
    payload,
  };
};

export default getUsers;
