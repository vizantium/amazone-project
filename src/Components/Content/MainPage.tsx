import {Header} from "../Header/Header";
import {Content} from "./Content";
import {Bottom} from "../Bottom/Bottom";
import React from "react";
import {Outlet} from "react-router-dom"

export const MainLayout: React.FC = () => {
    return (
        <div >
            <Header/>
            <div >
                <Outlet />
            </div>
            <Bottom/>
        </div>
    )
}