import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Nav, Layout } from "@douyinfe/semi-ui";
import { IconStar, IconUser } from "@douyinfe/semi-icons";
import CountdownTime from "./CountdownTime";
import QuizApp from "./QuizApp";
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
                  icon: <IconUser />,
                  link: "http://localhost:3000/CountdownTime",
                },
                {
                  itemKey: "QuizApp",
                  text: "QuizApp",
                  icon: <IconStar />,
                  link: "http://localhost:3000/QuizApp",
                },
              ]}
              header={{
                logo: (
                  <img src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg" />
                ),
                text: "10hrs10Projs React",
              }}
              footer={{
                collapseButton: true,
                collapseText: () => "Open/Close the sidebar",
              }}
            />
          </Sider>
          <Content>
            <Routes>
              <Route path="CountdownTime" element={<CountdownTime />} />
              <Route path="QuizApp" element={<QuizApp />} />
            </Routes>
          </Content>
        </Layout>
  );
};
export default App;
