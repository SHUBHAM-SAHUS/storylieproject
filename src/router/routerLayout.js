
import { Header } from "components/commoncomponent/HeaderLayout/Header.js";


import App from "../App.js";
// import logo from "assets/images/thumbnails/cloud.svg";

export const PublicRouterLayout = ({ children }) => (
  <div className="">
    <div className="logo d-flex justify-content-center">
    {/* <img src={logo} alt="logo" width="80"/> */}
    </div>
    <strong className="mx-auto"></strong>
    <Header/>
    {children}</div>
);

export const PrivateRouterLayout = ({ children }) => <App>{children}</App>;
