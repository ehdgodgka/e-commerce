import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom';

const TopicPage = () => (
  <div>
    <h1>TOPIC PAGE </h1>
    <TopicList />
  </div>
);
const TopicList = () => <div>Topic List</div>;
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={TopicPage} />
        <Route path='/jackets' component={TopicPage} />
        <Route path='/sneakers' component={TopicPage} />
        <Route path='/womens' component={TopicPage} />
        <Route path='/mens' component={TopicPage} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
