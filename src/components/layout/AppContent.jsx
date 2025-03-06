import { Layout } from "antd";
import PageProjects from "../pages/PageProjects/PageProjects.jsx";
import PageResume from "../pages/PageResume/PageResume.jsx";
import "./css/AppContent.css";

const AppContent = ({ currentPage }) => {
  return (
    <Layout.Content
      style={{
        minHeight: "calc(100vh - 64px - 50px)",
        background: "#faf0dc",
        paddingBottom: "20px",
      }}
      className="content-container"
    >
      {currentPage === "projects" && <PageProjects />}
      {currentPage === "resume" && <PageResume />}
    </Layout.Content>
  );
};

export default AppContent;
