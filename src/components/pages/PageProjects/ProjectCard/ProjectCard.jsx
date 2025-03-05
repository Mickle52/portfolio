import { Button, Card, Carousel } from "antd";
const { Meta } = Card;
import "./ProjectCard.css";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const ProjectCard = ({
  title,
  linkRepo,
  linkDeploy,
  imagesArray,
  logosArray,
  description,
}) => {
  const imagesArr = imagesArray.map((url) => url);
  console.log(imagesArr);

  // const logosArr = logosArray.map((url) => url);

  return (
    <Card
      className="content-card"
      title={<span>test</span>}
      style={{
        maxWidth: "800px",
        width: "100%",
        height: "auto",
        background: "#f7f4e9",
        border: "2px solid #e98074",
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
        {imagesArray.map((url, index) => {
          return (
            <div key={imagesArray + index} className="carousel-container">
              <img src={url} alt="1" className="card-carousel-image" />
            </div>
          );
        })}
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
