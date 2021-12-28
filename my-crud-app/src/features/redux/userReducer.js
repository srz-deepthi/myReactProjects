import { POST_USER_INFO_SUCCESS,  GET_USER_INFO_SUCCESS, GET_USER_INFO} from "./userTypes"

const userState={
    user:[],
}

const userReducer = (state=userState, action) => {
    //console.log("action :reducer",action)
    switch(action.type){
        case POST_USER_INFO_SUCCESS:            //POST_USER_INFO
            return{
                ...state,
                type:action.type,
                user:[...state.user, action.response],
                 //payload //append
            }
        case GET_USER_INFO_SUCCESS:
            return{
                ...state,
                user:action.userInfo,
                type:action.type
            }  
        case GET_USER_INFO: 
            return {
                ...state,
                type:GET_USER_INFO
            }
        default:return state
    }
}

export default userReducer
