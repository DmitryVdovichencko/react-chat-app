import { createStore, applyMiddleware }  from 'redux'
import createSagaMiddleware from 'redux-saga'
import handleNewMessage from '../sagas'
import reducers from '../reducers'
import setupSocket from '../sockets'
import { createLogger } from 'redux-logger'

import { connectRouter, routerMiddleware } from 'connected-react-router'

import { createBrowserHistory } from 'history' 

const history = createBrowserHistory()

const logger = createLogger();



const sagaMiddleware = createSagaMiddleware()


const store = createStore(
    
    connectRouter(history)(reducers),
    applyMiddleware(routerMiddleware(history),sagaMiddleware,logger)
    )
   
// const username = 'User'
// const socket = setupSocket(store.dispatch, username)

// sagaMiddleware.run(handleNewMessage,{socket,username})


export {history}
export {store}
export {sagaMiddleware}

