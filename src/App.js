import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import './App.css';
import CustomHeader from './components/CustomHeader/index';
import {Switch, Route, Redirect} from 'react-router-dom';
import Sidebar from './components/Sidebar';

const {Content } = Layout;
function App() {

  return(
    <>
    <Layout style={{backgroundColor: 'white'}}>
        <Sidebar />
        <Layout style={{backgroundColor: 'white'}}>
          <Content>
            <CustomHeader />
            <Switch>
              <Route exact path='/login' component=""/>
              <Redirect from= '/' to="/login"/>
            </Switch>
          </Content>
        </Layout>
    </Layout>
    </>
  )
}

export default App;
