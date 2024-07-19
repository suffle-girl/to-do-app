import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import "./style.css";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__navbar">
        <Navbar />
      </div>
      <div className="layout__content">{children}</div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
};
