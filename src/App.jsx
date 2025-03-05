import "./App.css";
import { Layout } from "antd";
import AppHeader from "./components/layout/AppHeader.jsx";
import AppContent from "./components/layout/AppContent.jsx";
import { useState } from "react";
import AppFooter from "./components/layout/AppFooter.jsx";

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
      <AppFooter currentPage={page}></AppFooter>
    </Layout>
  );
}

export default App;
