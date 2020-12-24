import { Layout } from 'antd';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from '../components/Sidebar/index';
import RightSidebar from '../components/right-side-bar/index'
import Dashboard from '../views/dashboard/index'
import Course from '../views/courses';
import CourseRightSideBar from '../components/CourseRightSideBar';
const { Content } = Layout;

function TheLayout()
{

    return (
        <>
            <Layout style={{ backgroundColor: 'white' }}>
                <Sidebar />
                <Layout style={{ backgroundColor: 'white' }}>
                    <Content>
                        <Switch>
                            <Route exact path="/courses" component={Course}/>
                            <Route exact path="/" component={Dashboard} />
                        </Switch>
                    </Content>
                </Layout>
                <RightSidebar>
                        <Switch>
                            <Route exact path="/courses" component={CourseRightSideBar}/>
                        </Switch>
                </RightSidebar>
            </Layout>
        </>
    )
}

export default TheLayout;
