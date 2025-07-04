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
            "images/crypto-app/1.png",
            "images/crypto-app/2.png",
            "images/crypto-app/3.png",
            "images/crypto-app/4.png",
          ]}
          logosArray={[
            "images/icons/ts-logo.svg",
            "images/icons/react-logo.svg",
            "images/icons/antd-logo.svg",
          ]}
          description={
            <>
              <p className={"card-description-title"}>
                TypeScript + React + Ant Design + ChartJS
              </p>
              <p>
                Проект для планирования инвестиций в криптовалюту,с актуальным
                курсом от CoinStats. Фукнционал: отслеживание изменений курса
                монеты на временных промежутках, добавление новых ассетов по
                своему курсу и подсчёт разницы суммы в портфеле, отображение
                всей информации о портфеле в фиде графика и таблицы с
                возможностью сортировки
              </p>
            </>
          }
        />
        <ProjectCard
          key={"rick&morty"}
          title={"Rick&Morty"}
          linkRepo={"https://github.com/Mickle52/rick_i_morty"}
          linkDeploy={"https://mickle52.github.io/rick_i_morty/"}
          imagesArray={[
            "images/rickmorty/1.png",
            "images/rickmorty/2.png",
            "images/rickmorty/3.png",
          ]}
          logosArray={[
            "images/icons/js-logo.svg",
            "images/icons/react-logo.svg",
          ]}
          description={
            <>
              <p className={"card-description-title"}>
                JavaScript + React + Styled Components
              </p>
              <p>
                Проект с подключенным OpenAPI Rick&Morty. С фукнцией подгрузки и
                отображения информации о персонажах, эпизодах и т.д. С функией
                поиска и фильтрации по имени, статусу и гендеру. Также присутствует
                пагинация.
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
            "images/hangman-game/1.png",
            "images/hangman-game/2.png",
            "images/hangman-game/3.png",
            "images/hangman-game/4.png",
            "images/hangman-game/5.png",
          ]}
          logosArray={[
            "images/icons/js-logo.svg",
            "images/icons/tailwind-logo.svg",
          ]}
          description={
            <>
              <p className={"card-description-title"}>JavaScript + Tailwind</p>
              <p>
                Игра в виселицу с поддержкой русского и анлийского языка,
                выбором тёмной и светлой темы, подбор уникальных слов на каждую
                игру от сторонних API
              </p>
            </>
          }
        />
      </div>
    </>
  );
};

export default PageProjects;
