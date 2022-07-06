import React from "react";
import { Outlet } from "react-router-dom";
import { default as Header } from "./Header";

function Layout(){
    return(
        <>
            <Header/>
                <Outlet/>
        </>
    )
}

export default Layout;