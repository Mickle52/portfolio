import { Breadcrumb, theme } from "antd";

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
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Резюме</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          minHeight: 280,
          padding: 24,
          borderRadius: borderRadiusLG,
        }}
      >
        Resume
      </div>
    </>
  );
};

export default PageResume;
