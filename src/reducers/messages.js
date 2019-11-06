import * as types from '../constants/ActionTypes' 
const messages = (state = [], action)=>{
    switch (action.type){
        case types.ADD_MESSAGE: 
        case types.MESSAGE_RECIEVED:
            const {message,author,id}=action
            return state.concat([
                {
                    message,
                    author,
                    id
                }
            ])
        default:
            return state
    }
}
export default messages