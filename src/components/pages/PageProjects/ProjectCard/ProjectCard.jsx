import { Card, Carousel } from "antd";
const { Meta } = Card;
import "./ProjectCard.css";

const ProjectCard = ({
  title,
  linkRepo,
  linkDeploy,
  imagesArray,
  logosArray,
  description,
}) => {
  const imagesArr = imagesArray.map((url, index) => {
    return (
      <div key={imagesArray + index} className="carousel-container">
        <img src={url} alt="1" className="card-carousel-image" />
      </div>
    );
  });

  const logosArr = logosArray.map((url) => {
    return (
      <img
        src={url}
        alt={"card-title-logo"}
        className={"card-head-title-logo"}
        key={url}
      ></img>
    );
  });

  return (
    <Card
      className="content-card"
      title={
        <>
          <span>{title}</span>
          {logosArr}
        </>
      }
      style={{
        maxWidth: "800px",
        width: "100%",
        height: "auto",
        background: "#f7f4e9",
        border: "3px solid #e98074",
      }}
    >
      <Carousel
        arrows
        infinite={true}
        autoplay={{
          dotDuration: true,
        }}
        autoplaySpeed={5000}
        className="card-carousel"
      >
        {imagesArr}
      </Carousel>
      <Meta description={description} />
      <div className="links-container">
        <a href={linkRepo} target="_blank" className="link">
          <button className="btn btn-repo">Ссылка на репозиторий</button>
        </a>
        <a href={linkDeploy} target="_blank" className="link">
          <button className="btn btn-deploy">Ссылка на деплой</button>
        </a>
      </div>
    </Card>
  );
};

export default ProjectCard;
