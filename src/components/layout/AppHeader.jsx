import { Layout, Menu } from "antd";
import { useState } from "react";
import "./AppHeader.css";

const menuItems = [
  {
    key: "projects",
    label: "Мои проекты",
  },
  {
    key: "resume",
    label: "Резюме",
  },
];

const AppHeader = ({ onChangePage }) => {
  const [currentKey, setCurrentKey] = useState("projects");

  const onClick = (e) => {
    setCurrentKey(e.key);
    onChangePage(e.key);
  };

  return (
    <Layout.Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        height: "64px",
        background: "#f7f4e9",
      }}
    >
      <div className="demo-logo" />
      <Menu
        className="header-menu"
        theme="dark"
        mode="horizontal"
        selectedKeys={[currentKey]}
        defaultSelectedKeys={["current"]}
        items={menuItems}
        onClick={onClick}
        style={{
          flex: 1,
          justifyContent: "center",
          minWidth: 0,
          background: "#f7f4e9",
        }}
      />
    </Layout.Header>
  );
};

export default AppHeader;
