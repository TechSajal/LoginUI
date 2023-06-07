import {Actions} from './Action'
export const reducer = (state, action) => {
    switch (action.type){
      case Actions.NAME:
        return{...state,Name:action.text}
      case Actions.EMAIL:
        return {...state,Email:action.text}
      case Actions.PHONE:
        return {...state,Phone:action.text}    
      case Actions.NAME_ERROR:
        return {...state, NameError: action.error};
      case Actions.EMAIL_ERROR:
        return {...state, EmailError: action.error};
      case Actions.PHONE_ERROR:
        return {...state, PhoneError: action.error};
      default:
        return state;
    }
  };