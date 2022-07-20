import * as types from "./actionTypes"

const initalState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
   case types.GET_TASKS_REQUEST :
    return {...state,isLoading:true};
    case types.GET_TASKS_SUCCESS :
     return {...state,isLoading:false,tasks:payload};
     case types.GET_TASKS_FAILURE:
      return {...state,isLoading:false,isError:false};
    default: 
      return state;
  }
};

export { reducer };
