import { Layout } from "antd";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';
import Sidebar from "../components/Sidebar/index";
import RightSidebar from "../components/right-side-bar/index";
import Dashboard from "../views/dashboard/index";
import Course from "../views/courses";
import TurnIn from "../views/turn-in";
import CourseRightSideBar from "../components/CourseRightSideBar";
import TurnInRightSideBar from "../components/TurnInRightSideBar";
import ClassroomDemo from "../views/classroom_demo";
import DashboardRightSidebar from "../components/DashboardRightSidebar";
import ClassroomDemoRightSidebar from "../components/ClassroomDemoRightSidebar";
const { Content } = Layout;

function TheLayout() {
  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <Sidebar />
        <Layout style={{ backgroundColor: "white" }}>
          <Content>
            <Switch>
              {/* <Redirect exact from="/" to="/login" /> */}
              <Scrollbars autoHide autoHideTimeout={0} autoHeight autoHeightMin="100vh" autoHeightMax="100vh" >
                <Route path="/courses/web/classwork" component={TurnIn} />
                <Route exact path="/courses" component={Course} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/courses/web" component={ClassroomDemo} />
              </Scrollbars>
            </Switch>
          </Content>
        </Layout>
        <RightSidebar>
          <Switch>
            <Route
              path="/courses/web/classwork"
              component={TurnInRightSideBar}
            />
            <Route exact path="/courses" component={CourseRightSideBar} />
            <Route exact path="/dashboard" component={DashboardRightSidebar} />
            <Route
              exact
              path="/courses/web"
              component={ClassroomDemoRightSidebar}
            />
          </Switch>
        </RightSidebar>
      </Layout>
    </>
  );
}

export default TheLayout;
