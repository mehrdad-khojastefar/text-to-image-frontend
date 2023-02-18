import axios from "axios";
const ipsumLink = "https://picsum.photos/600.jpg";
export const getData =async (text) => {
  ////api from backend
  const Link= await axios.get(`https://picsum.photos/600`);
  console.log(Link.request.responseURL)

  ////test
  return Link.request.responseURL;
};
