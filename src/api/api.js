import axios from "axios";

const getData = () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(res.data, "Get DAta");
};

export default getData;
