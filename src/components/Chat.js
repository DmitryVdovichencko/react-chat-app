import React,{Component} from 'react';
import '../App.css';
import {SideBar} from '../containers/SideBar'
import {MessagesList} from '../containers/MessagesList'
import {AddMessage}  from '../containers/AddMessage'
class App extends Component {
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