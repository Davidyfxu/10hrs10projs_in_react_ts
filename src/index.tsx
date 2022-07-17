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
              link: "https://davidyfxu.github.io/10hrs10projs_in_react_ts/CountdownTime",
            },
            {
              itemKey: "Quiz",
              text: "Quiz",
              icon: <IconCalendarClock />,
              link: "https://davidyfxu.github.io/10hrs10projs_in_react_ts/Quiz",
            },
            {
              itemKey: "Recipe",
              text: "Recipe",
              icon: <IconMenu />,
              link: "https://davidyfxu.github.io/10hrs10projs_in_react_ts/Recipe",
            },
            {
              itemKey: "Notes",
              text: "Notes",
              icon: <IconFile />,
              link: "https://davidyfxu.github.io/10hrs10projs_in_react_ts/Notes",
            },
            {
              itemKey: "ToDo",
              text: "ToDo",
              icon: <IconList />,
              link: "https://davidyfxu.github.io/10hrs10projs_in_react_ts/ToDo",
            },
            {
              itemKey: "GitHubProfiles",
              text: "GitHubProfiles",
              icon: <IconGithubLogo />,
              link: "https://davidyfxu.github.io/10hrs10projs_in_react_ts/GitHubProfiles",
            },
            {
              itemKey: "Drawing",
              text: "Drawing",
              icon: <IconEdit />,
              link: "https://davidyfxu.github.io/10hrs10projs_in_react_ts/Drawing",
            },
            {
              itemKey: "PswGen",
              text: "PswGen",
              icon: <IconSafe />,
              link: "https://davidyfxu.github.io/10hrs10projs_in_react_ts/PswGen",
            },
            {
              itemKey: "Weather",
              text: "Weather",
              icon: <IconSun />,
              link: "https://davidyfxu.github.io/10hrs10projs_in_react_ts/Weather",
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
