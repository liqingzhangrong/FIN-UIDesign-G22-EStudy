import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/right-side-bar/index'

const {Content } = Layout;
function App() {

  return(
    <>
    <Layout style={{backgroundColor: 'white'}}>
        <Sidebar />
        <Layout style={{backgroundColor: 'white'}}>
          <Content>
            <Switch>
              <Route exact path='/login' component=""/>
              <Redirect from= '/' to="/login"/>
            </Switch>
          </Content>
        
        </Layout>
        <RightSidebar>
          
        </RightSidebar>
    </Layout>
    </>
  )
}

export default App;
