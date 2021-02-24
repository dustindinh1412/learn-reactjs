import React from 'react';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import './App.css';
import ColorBox from './components/ColorBox';
import {Clock, BetterClock} from './components/Clock';
import {NavLink,Route, Link, Switch, Redirect} from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Home Page</h1>

        <NavLink exact to="/" activeClassName="current-page"  > Todo List </NavLink>
        <NavLink to="/todos" activeClassName="current-page"> Todo List </NavLink>
        <NavLink to="/albums" activeClassName="current-page"> Album List </NavLink>

        <Switch >

          <Route exact path="/" component={Clock}/>
          <Route path="/todos" component={TodoFeature}/>
          <Route path="/albums" component={AlbumFeature}/>

          <Redirect from="/:any" to="/"></Redirect>
        </Switch>

    </div>
  );
}


export default App;
