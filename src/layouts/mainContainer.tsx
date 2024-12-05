import React from "react";
import MainRouting from "../routes/routes";
import TopMenu from "./components/TopMenu/topMenu";
import { Box } from "@mui/material";
const MainContainer: React.FC = () => {
  
    return (
        <React.Fragment>
            <Box className="mx-auto max-w-full">
                <TopMenu />
                <MainRouting />
            </Box>
       </React.Fragment>
    );
};
 
export default MainContainer;
