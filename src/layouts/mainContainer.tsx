import React from "react";
import MainRouting from "../routes/routes";
import TopMenu from "./components/TopMenu/topMenu";
const MainContainer: React.FC = () => {
    return (
        <div className="h-full">
            <TopMenu />
            <div className={`app w-full h-full`} > {/*child-height*/}
                <div className={`w-full h-full inline-table`} >
                    <MainRouting />
                </div>
            </div>
        </div>
    );
};
 
export default MainContainer;
