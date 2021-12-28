import { POST_USER_INFO, EMPTY ,GET_USER_INFO,DELETE_USER_INFO ,UPDATE_USER_INFO} from './userTypes'

export const addUser= (props)=>{
    return{
        type:POST_USER_INFO,
        payload:props
    }
}

export const changeUser=()=>{
    return{
        type:EMPTY
    }
}

export const getUser=() =>{
    return{
        type:GET_USER_INFO
    }
}

export const deleteUser=(props)=>{
    return{
        type:DELETE_USER_INFO,
        payload:props
    }
}

export const updateUser=(props)=>{
    //console.log("update : ",props)
    return{
            type:UPDATE_USER_INFO,
            payload:props
    }  
}