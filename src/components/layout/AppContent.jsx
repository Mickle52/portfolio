import { Layout } from "antd";
import PageProjects from "../pages/PageProjects/PageProjects.jsx";
import PageResume from "../pages/PageResume/PageResume.jsx";
import './AppContent.css'

const AppContent = ({ currentPage }) => {
  return (
    <Layout.Content
      style={{
        minHeight: "calc(100vh - 64px)",
        background: "#faf0dc",
      }}
      className="content-container"
    >
      {currentPage === "projects" && <PageProjects />}
      {currentPage === "resume" && <PageResume />}
    </Layout.Content>
  );
};

export default AppContent;
