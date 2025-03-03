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

const ProjectCard = ({ cover, title, linkRepo, linkDeploy }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Card
      className="content-card"
      title={title}
      style={{
        width: "800px",
        background: "#f7f4e9",
        border: "2px solid #e98074",
        paddingInline: "14px",
      }}
    >
      <Meta description="This is the description" />
      <Carousel
        arrows
        infinite={true}
        afterChange={onChange}
        autoplay={{
          dotDuration: true,
        }}
        autoplaySpeed={5000}
      >
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <div>
        <a href="/">
          <button className="link link-repo">Ссылка на репо</button>
        </a>
        <a href="/">
          <button className="link link-deploy">Ссылка на деплой</button>
        </a>
      </div>
    </Card>
  );
};

export default ProjectCard;
