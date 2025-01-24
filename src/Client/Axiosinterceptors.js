import axios from "axios";


const Axiosclient = axios.create({
    baseURL:"https://fakestoreapi.com/"
})

 Axiosclient.interceptors.request.use((config)=>{
    const Token =localStorage.getItem("token")
    if (Token) {
      config.headers.Authorization =`Barer${Token}` 
    }
    return config;
 },(error)=>{
    return Promise.reject(error)
 })

 Axiosclient .interceptors.response.use((resp)=>{
    return resp
 },(error)=>{
   if (error.response.status ===2001) {
    window.location.href ="/signin"
   }
 })