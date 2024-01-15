import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from "./actionType"



export const showNotification = (type, message) =>{
    return{
        type: SHOW_NOTIFICATION,
        payload:{
            type,
            message
        }
    }
}


export const hideNotification = ()=>{
    return{
        type:HIDE_NOTIFICATION,
    }
}