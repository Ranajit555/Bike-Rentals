const Layout = ({ children, header }) => {
  return (
    <div id="layout" className="h-[80vh] w-full">
      <h1 className="text-4xl h-[full] ml-[40px]">{header}</h1>
      {children}
    </div>
  );
};
export default Layout;
