import {SHOW_NOTIFICATION, HIDE_NOTIFICATION} from './actionType';


const initialState={
    message: '',
    type: '',
    visible: false,
}

export const notificationReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW_NOTIFICATION:
            return {
                message: action.payload.message,
                type: action.payload.type,
                visible: true,
              };
        case HIDE_NOTIFICATION:
            return {
                ...state,
                visible: false,
            };
        default :
            return state        
    }

}