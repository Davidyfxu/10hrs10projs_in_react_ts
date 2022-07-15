import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Nav, Layout } from "@douyinfe/semi-ui";
import {
  IconCalendarClock,
  IconEdit,
  IconFile,
  IconGithubLogo,
  IconHourglass,
  IconList,
  IconMenu,
  IconSafe,
  IconStar,
  IconSun,
} from "@douyinfe/semi-icons";
import CountdownTime from "./CountdownTime";
import Quiz from "./Quiz";
const App = () => {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout>
      <Sider>
        <Nav
          bodyStyle={{ height: "80vh" }}
          items={[
            {
              itemKey: "CountdownTime",
              text: "CountdownTime",
              icon: <IconHourglass />,
              link: "http://localhost:3000/CountdownTime",
            },
            {
              itemKey: "Quiz",
              text: "Quiz",
              icon: <IconCalendarClock />,
              link: "http://localhost:3000/Quiz",
            },
            {
              itemKey: "Recipe",
              text: "Recipe",
              icon: <IconMenu />,
              link: "http://localhost:3000/Recipe",
            },
            {
              itemKey: "Notes",
              text: "Notes",
              icon: <IconFile />,
              link: "http://localhost:3000/Notes",
            },
            {
              itemKey: "ToDo",
              text: "ToDo",
              icon: <IconList />,
              link: "http://localhost:3000/ToDo",
            },
            {
              itemKey: "GitHubProfiles",
              text: "GitHubProfiles",
              icon: <IconGithubLogo />,
              link: "http://localhost:3000/GitHubProfiles",
            },
            {
              itemKey: "Drawing",
              text: "Drawing",
              icon: <IconEdit />,
              link: "http://localhost:3000/Drawing",
            },
            {
              itemKey: "PswGen",
              text: "PswGen",
              icon: <IconSafe />,
              link: "http://localhost:3000/PswGen",
            },
            {
              itemKey: "Weather",
              text: "Weather",
              icon: <IconSun />,
              link: "http://localhost:3000/Weather",
            },
          ]}
          header={{
            logo: (
              <img src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg" />
            ),
            text: "10hrs10Projs",
          }}
          footer={{
            collapseButton: true,
            collapseText: () => "Open/Close",
          }}
        />
      </Sider>
      <Content>
        <Routes>
          <Route path="CountdownTime" element={<CountdownTime />} />
          <Route path="Quiz" element={<Quiz />} />
        </Routes>
      </Content>
    </Layout>
  );
};
export default App;
