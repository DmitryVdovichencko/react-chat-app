import React,{Component} from 'react';
import '../App.css';
import {SideBar} from '../containers/SideBar'
import {MessagesList} from '../containers/MessagesList'
import {AddMessage}  from '../containers/AddMessage'
import handleNewMessage from '../sagas'
import setupSocket from '../sockets'
import {sagaMiddleware, store} from '../store'
class App extends Component {
  componentDidMount(){
    const users = store.getState().users
    const username = users[users.length-1].name
    const socket = setupSocket(store.dispatch, username)
    sagaMiddleware.run(handleNewMessage,{socket,username})
  }
  
  render(){
    return (
      <div className="App" id="container">
        <SideBar />
        <section id="main">
            <MessagesList />
            <AddMessage />
        </section>
        
      </div>
    );
  }

}

export default App;