import Navbar from "./Navbar";
import Footer from "./Footer";


const Layout = ({children}) => {
  return <div>
      <Navbar></Navbar>
      {children}
      <Footer/>
  </div>;
};

export default Layout;
