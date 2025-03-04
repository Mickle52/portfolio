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
          key={"crypto"}
          title={"Crypto App"}
          linkRepo={"https://github.com/Mickle52/crypto-app"}
          linkDeploy={"https://mickle52.github.io/crypto-app/"}
          imagesArray={[
            "/images/crypto-app/1.png",
            "/images/crypto-app/2.png",
            "/images/crypto-app/3.png",
            "/images/crypto-app/4.png",
          ]}
          description={`TypeScript + React + Ant Design\nПроект для планирования инвестиций в криптовалюту,с актуальным курсом на монеты`}
        />
        <ProjectCard
          key={"hangman"}
          title={"Hangman Game"}
          linkRepo={"https://github.com/Mickle52/hangman-game-js-tailwind"}
          linkDeploy={"https://mickle52.github.io/hangman-game-js-tailwind/"}
          imagesArray={[
            "/images/hangman-game/1.png",
            "/images/hangman-game/2.png",
            "/images/hangman-game/3.png",
            "/images/hangman-game/4.png",
            "/images/hangman-game/5.png",
          ]}
          description={
            "Проект для планирования инвестиций в криптовалюту, с актуальным курсом на монеты"
          }
        />
      </div>
    </>
  );
};

export default PageProjects;
