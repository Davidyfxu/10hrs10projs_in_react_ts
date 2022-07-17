import * as React from "react";
import { Routes, Route } from "react-router-dom";
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
  IconSun,
} from "@douyinfe/semi-icons";
import CountdownTime from "./CountdownTime";
import Quiz from "./Quiz";
import Recipe from "./Recipe";
import Drawing from "./Drawing";
import Weather from "./Weather";
import ToDo from "./ToDo";
import PswGen from "./PswGen";
import Notes from "./Notes";
import GithubProfiles from "./GithubProfiles";

const App = () => {
  const {  Sider, Content } = Layout;
  const url = window.location.href.split("/")[0];

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
              link: `${url}CountdownTime`,
            },
            {
              itemKey: "Quiz",
              text: "Quiz",
              icon: <IconCalendarClock />,
              link: `${url}Quiz`,
            },
            {
              itemKey: "Recipe",
              text: "Recipe",
              icon: <IconMenu />,
              link: `${url}Recipe`,
            },
            {
              itemKey: "Notes",
              text: "Notes",
              icon: <IconFile />,
              link: `${url}Notes`,
            },
            {
              itemKey: "ToDo",
              text: "ToDo",
              icon: <IconList />,
              link: `${url}ToDo`,
            },
            {
              itemKey: "GitHubProfiles",
              text: "GitHubProfiles",
              icon: <IconGithubLogo />,
              link: `${url}GitHubProfiles`,
            },
            {
              itemKey: "Drawing",
              text: "Drawing",
              icon: <IconEdit />,
              link: `${url}Drawing`,
            },
            {
              itemKey: "PswGen",
              text: "PswGen",
              icon: <IconSafe />,
              link: `${url}PswGen`,
            },
            {
              itemKey: "Weather",
              text: "Weather",
              icon: <IconSun />,
              link: `${url}Weather`,
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
          <Route path="Quiz" element={<Quiz />}/>
          <Route path="Recipe" element={<Recipe />} />
          <Route path="Notes" element={<Notes />} />
          <Route path="ToDo" element={<ToDo />} />
          <Route path="GitHubProfiles" element={<GithubProfiles />} />
          <Route path="Drawing" element={<Drawing />} />
          <Route path="PswGen" element={<PswGen />} />
          <Route path="Weather" element={<Weather />} />
        </Routes>
      </Content>
    </Layout>
  );
};
export default App;
