import React from 'react';
import Chat from './components/Chat'
import {SignIn} from './containers/SignIn'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'




const App = () => (
  <BrowserRouter >
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/chat" component={Chat} />
      <Route exact path="/signIn" component={SignIn} />
      <Route path='*' render={() => (<h1>PAGE NOT FOUND</h1>)}/>

    </Switch>
  </BrowserRouter>
);
export default App;