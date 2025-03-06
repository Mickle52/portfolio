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
            "/public/images/crypto-app/1.png",
            "/images/crypto-app/2.png",
            "/public/images/crypto-app/3.png",
            "/public/images/crypto-app/4.png",
          ]}
          logosArray={[
            "/public/images/icons/ts-logo.svg",
            "/public/images/icons/react-logo.svg",
            "/public/images/icons/antd-logo.svg",
          ]}
          description={
            <>
              <p className={"card-description-title"}>
                TypeScript + React + Ant Design + ChartJS
              </p>
              <p>
                Проект для планирования инвестиций в криптовалюту,с актуальным
                курсом на монеты
              </p>
            </>
          }
        />
        <ProjectCard
          key={"hangman"}
          title={"Hangman Game"}
          linkRepo={"https://github.com/Mickle52/hangman-game-js-tailwind"}
          linkDeploy={"https://mickle52.github.io/hangman-game-js-tailwind/"}
          imagesArray={[
            "/public/images/hangman-game/1.png",
            "/public/images/hangman-game/2.png",
            "/public/images/hangman-game/3.png",
            "/public/images/hangman-game/4.png",
            "/public/images/hangman-game/5.png",
          ]}
          logosArray={[
            "/public/images/icons/js-logo.svg",
            "/public/images/icons/tailwind-logo.svg",
          ]}
          description={
            <>
              <p className={"card-description-title"}>JavaScript + Tailwind</p>
              <p>
                Проект для планирования инвестиций в криптовалюту,с актуальным
                курсом на монеты
              </p>
            </>
          }
        />
      </div>
    </>
  );
};

export default PageProjects;
