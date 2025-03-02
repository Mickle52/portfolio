import { Layout } from "antd";
import PageProjects from "../pages/PageProjects/PageProjects.jsx";
import PageResume from "../pages/PageResume/PageResume.jsx";

const AppContent = ({ currentPage }) => {
  return (
    <Layout.Content
      style={{
        padding: "0 48px",
        minHeight: "calc(100vh - 64px)",
        background: "#faf0dc",
      }}
    >
      {currentPage === "projects" && <PageProjects />}
      {currentPage === "resume" && <PageResume />}
    </Layout.Content>
  );
};

export default AppContent;
