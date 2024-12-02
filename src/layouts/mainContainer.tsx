import React from "react";
import Home from "../pages/Home/home";
import TopMenu from "./components/TopMenu/topMenu";
const MainContainer: React.FC = () => {
  
    return (
        <React.Fragment>
            <TopMenu />
            <Home />
       </React.Fragment>
    );
};
 
export default MainContainer;
