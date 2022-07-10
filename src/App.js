import React from 'react';
import './App.css';
import Inicio from './paginas/Inicio';
import { Route, Switch } from 'react-router-dom';
import Blog from './paginas/Blog';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/cthulhu-mythos' component={Inicio} />
        <Route exact path='/blog/:id' component={Blog} />
        <Route />
      </Switch>
    );
  }
}
