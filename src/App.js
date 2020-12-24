import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/right-side-bar/index'
import Login from './views/login/index'
const {Content } = Layout;
function App() {

  return(
    <>
    <Switch>
    <Route exact path='/login' component={Login}/>
              <Redirect from= '/' to="/login"/>
    </Switch>
    {/* <Layout style={{backgroundColor: 'white'}}>
        <Sidebar />
        <Layout style={{backgroundColor: 'white'}}>
          <Content>
            <Switch>
              <Route exact path='/login' component={Login}/>
              <Redirect from= '/' to="/login"/>
            </Switch>
          </Content>
        
        </Layout>
        <RightSidebar>
          
        </RightSidebar>
    </Layout> */}
    </>
  )
}

export default App;
