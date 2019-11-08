import { createStore, applyMiddleware }  from 'redux'
import createSagaMiddleware from 'redux-saga'
import handleNewMessage from '../sagas'
import reducers from '../reducers'
import setupSocket from '../sockets'
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'
const history = createBrowserHistory()
const logger = createLogger();
let username='User'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    
    reducers,
    applyMiddleware(sagaMiddleware,logger)
    )
const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage,{socket,username})


export default store