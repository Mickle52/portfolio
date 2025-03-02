import "./App.css";
import { Layout } from "antd";
import AppHeader from "./components/layout/AppHeader.jsx";
import AppContent from "./components/layout/AppContent.jsx";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("projects");

  function getCurrentPage(value) {
    setPage(value);
    console.log(value);
  }

  return (
    <Layout>
      <AppHeader onChangePage={getCurrentPage}></AppHeader>
      <AppContent currentPage={page}></AppContent>
    </Layout>
  );
}

export default App;
