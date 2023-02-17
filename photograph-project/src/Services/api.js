import axios from "axios"
export const getData=async ()=>{
    const data= await axios.get("https://api.unsplash.com/photos/random")
    .then((response)=>console.log(response.data))
}