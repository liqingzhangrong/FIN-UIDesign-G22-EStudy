import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import TheLayout from './pages/TheLayout';
import Login from './views/login/index';
const { Content } = Layout;

function App()
{
  return (
    <>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Redirect exact from='/' to="/login" />
        <Route path='/' component={TheLayout} />
        
      </Switch>
    </>
  )
}

export default App;
