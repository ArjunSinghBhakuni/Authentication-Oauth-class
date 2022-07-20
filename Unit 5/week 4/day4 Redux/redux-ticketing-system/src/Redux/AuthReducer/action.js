 import axios from 'axios';
import * as types from './actionTypes';

 export const register =(payload)=>(dispatch)=>{
dispatch({type:types.REGISTER_REQUEST});

return axios
.post("https://masai-api-mocker.herokuapp.com/auth/register",payload)
.then((r)=>{
// console.log(r.data)
 dispatch({type:types.REGISTER_SUCCESS,payload:r.data})
return types.REGISTER_SUCCESS 
})
.catch((err)=>{
 dispatch({type:types.REGISTER_FAILURE,payload:err})
 return types.LOGIN_FAILURE
})

 }


 export const login = (params)=>(dispatch)=>{
  dispatch({type:types.LOGIN_REQUEST})

  return axios
  .post("https://masai-api-mocker.herokuapp.com/auth/login",params)
  .then((r)=>{
   console.log(r.data.token)
   dispatch({type:types.LOGIN_SUCCESS,payload:r.data.token})
   return types.LOGIN_SUCCESS
  }).catch((err)=>{
   dispatch({type:types.LOGIN_FAILURE,payload:err})
   return types.LOGIN_FAILURE
  })
 }