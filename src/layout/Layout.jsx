// Layout
function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout__navbar"></div>
      <div className="layout__app">{children}</div>
      <div className="layout__footer"></div>
    </div>
  );
}

export default Layout;
