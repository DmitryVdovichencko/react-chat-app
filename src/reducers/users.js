import * as types from '../constants/ActionTypes'

const users = (state = [], action) => {
    switch(action.type){
        case types.ADD_USER:
            const {name,id} = action
            return state.concat([
                {
                    name,
                    id
                }
            ])
        case types.USERS_LIST:
            return action.users
        default:
            return state
    }

}
export default users