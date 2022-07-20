

import axios from 'axios';
import * as types from './actionTypes';

const getTasks =()=>(dispatch)=>{
 dispatch({type:types.GET_TASKS_REQUEST})
 return axios.get("http://localhost:5000/tasks").then((r)=>{
  console.log(r.data)
  dispatch({type:types.GET_TASKS_SUCCESS,payload:r.data})
 })
  .catch((e)=>{dispatch({type:types.GET_TASKS_FAILURE,payload:e})})
}
export {getTasks}