import axios from "axios"
import { URL,posts_endPoints } from "./endPoints"
import { data as postData } from "./utils"
 export const  getRequest = async() =>{
 const res = await axios({
    method: 'GET',
    baseURL:URL,
    url:posts_endPoints
 })
  return res
}

export const postRequest = async(postData) =>{
 const res = await axios({
    method: 'POST',
    baseURL:URL,
    url:posts_endPoints,
    data: postData
 })
 return res
}
