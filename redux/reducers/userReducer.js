import * as types from '../types'

const initialState={
    user:null,
    isLoggedIn:false
}
export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        default:
            return state

        case types.GET_USER:
            return{
                ...state,
                user:action.payload,
                 isLoggedIn:true,
            }    
            case types.CLEAR_USER:
                return {
                    user:null,
                    isLoggedIn:false
                }  
    }

}