import { Button, Card } from "antd";
const { Meta } = Card;
import "./ProjectCard.css";

const ProjectCard = ({ cover, title, linkRepo, linkDeploy }) => {
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
      cover={<img alt="example" src={cover} className="card-cover" />}
    >
      <Meta description="This is the description" />
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
