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

const ProjectCard = ({ cover, title, linkRepo, linkDeploy, imagesArray }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const imagesArr = imagesArray.map((url) => url)
  console.log(imagesArr)
  return (
    <Card
      className="content-card"
      title={title}
      style={{
        maxWidth: '800px',
        width: '100%',
        height: 'auto',
        background: "#f7f4e9",
        border: "2px solid #e98074",
        paddingInline: "14px",
      }}
    >
      <Carousel
        arrows
        infinite={true}
        afterChange={onChange}
        autoplay={{
          dotDuration: true,
        }}
        autoplaySpeed={5000}
        className="card-carousel"
      >
        {imagesArray.map((url) => {
          return (
            <div className='carousel-container'>
              <img src={url} alt="1" className="card-carousel-image" />
            </div>)
        })}
      </Carousel>
      <Meta description="This is the description" />
      <div className="links-container" >
        <a href="/" className="link">
          <button className="btn btn-repo">Ссылка на репо</button>
        </a>
        <a href="/" className="link">
          <button className="btn btn-deploy">Ссылка на деплой</button>
        </a>
      </div>
    </Card>
  );
};

export default ProjectCard;
