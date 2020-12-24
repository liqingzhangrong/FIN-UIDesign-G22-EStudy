import { Layout } from 'antd';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from '../components/Sidebar/index';
import RightSidebar from '../components/right-side-bar/index'
import Dashboard from '../views/dashboard/index'
const { Content } = Layout;

function TheLayout()
{

    return (
        <>
            <Layout style={{ backgroundColor: 'white' }}>
                <Sidebar />
                <Layout style={{ backgroundColor: 'white', padding: '100px' }}>
                    <Content>
                        <Switch>
                            <Route exact path="/dashboard" component={Dashboard} />
                        </Switch>
                    </Content>
                </Layout>
                <RightSidebar>
                </RightSidebar>
            </Layout>
        </>
    )
}

export default TheLayout;
