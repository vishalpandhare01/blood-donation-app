import { CREATE_USER } from "../action/types";

 const initialState = {
    userDetial:"",
    user:[]
 }

 export const userDataReducer = (state = initialState ,action)=>{
    switch (action.type){
        case  CREATE_USER :
            return {
                ...state,
                places :state.user.concat({
                    value:action.payload
                })
            }

        default:{
            return state
        }
    }
 }