import { Breadcrumb, theme } from "antd";
import ProjectCard from "./ProjectCard/ProjectCard.jsx";
import "./PageProjects.css";

const PageProjects = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
        separator=">"
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item className="last-test">Мои проекты</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          minHeight: 280,
          padding: 0,
          borderRadius: borderRadiusLG,
        }}
        className="projects-list"
      >
        <ProjectCard
          title={"Crypto App"}
          cover={"/images/crypto-app-cover.png"}
          linkRepo={""}
          linkDeploy={""}
        />
        <ProjectCard
          title={"Hangman Game"}
          cover={"/images/hangman-game-cover.png"}
          linkRepo={""}
          linkDeploy={""}
        />
      </div>
    </>
  );
};

export default PageProjects;
