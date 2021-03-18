import styled from './layout.module.css';

const Layout = ({ children }) => {
  return <div className={styled.container}>{children}</div>;
};

export default Layout;
