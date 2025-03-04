import { Breadcrumb, theme } from "antd";
import Resume from "./Resume.jsx";

const PageResume = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
        separator=">"
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item className="last-test">Резюме</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          minHeight: 280,
          padding: 24,
          borderRadius: borderRadiusLG,
        }}
      >
        <Resume></Resume>
      </div>
    </>
  );
};

export default PageResume;
