import { combineReducers } from "redux"
import messages from "./messages"
import users from "./users"
import {connectRouter} from 'connected-react-router';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
const rootReducer = combineReducers({
    messages,
    users,
    router:connectRouter(history)
   
    
})
export default  rootReducer

