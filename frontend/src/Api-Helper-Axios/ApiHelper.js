import axios from "axios";

export const getUserRegister = async (data) => {
  const res = await axios
    .post("http://localhost:3000/user/register", {
      name: data.name,
      email: data.email,
      password: data.password,
    })
    .catch((err) => {
      console.log(err);
    });
  if (res.status !== 200) {
    return console.log("Unexpected Error Occured");
  }
  const userRegister = await res.data;
  return userRegister;
};



export const getuserlogin = async(data)=>{
    const res = await axios.post('http://localhost:3000/user/login',{
  email:data.email,
  password:data.password
    }).catch((err)=>{
      console.log(err);
    })
    if (res.status !== 200) {
      return console.log("Unexpected Error Occured");
    }
    const userlogin = await res.data;
    return userlogin;
  }
