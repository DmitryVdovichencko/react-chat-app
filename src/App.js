import React from 'react';
import Chat from './components/Chat'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'




const App = () => (
  <BrowserRouter >
    <Switch>
      <Route exact path="/" component={Chat} />
      <Route path='*' render={() => (<h1>PAGE NOT FOUND</h1>)}/>

    </Switch>
  </BrowserRouter>
);
export default App;