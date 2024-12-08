import React from "react";
import MainRouting from "../routes/routes";
import TopMenu from "./components/TopMenu/topMenu";
import { Box } from "@mui/material";
const MainContainer: React.FC = () => {
  
    return (
        <>
            <Box className="mx-auto max-w-full mb-5">
                <TopMenu />
                <MainRouting />
            </Box>
       </>
    );
};
 
export default MainContainer;
