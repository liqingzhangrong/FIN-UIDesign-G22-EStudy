import { Layout } from 'antd';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from '../components/Sidebar/index';
import RightSidebar from '../components/right-side-bar/index'
import Dashboard from '../views/dashboard/index'
import Course from '../views/courses';
import TurnIn from '../views/turn-in';
import CourseRightSideBar from '../components/CourseRightSideBar';
import TurnInRightSideBar from '../components/TurnInRightSideBar';
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
                            <Route path="/courses/web/classwork" component={TurnIn} />
                            <Route exact path="/courses" component={Course} />
                            <Route exact path="/" component={Dashboard} />
                        </Switch>
                    </Content>
                </Layout>
                <RightSidebar>
                    <Switch>
                        <Route path="/classname/classwork" component={TurnInRightSideBar} />
                        <Route exact path="/courses" component={CourseRightSideBar} />
                    </Switch>
                </RightSidebar>
            </Layout>
        </>
    )
}

export default TheLayout;
