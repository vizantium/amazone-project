import React from 'react';
import './scss/app.scss';
import {Content} from "./Components/Content/Content";
import {Route, Routes} from "react-router-dom";
import {Registration} from "./Components/Registration & Login/Registration";
import {Login} from "./Components/Registration & Login/Login";
import {MainLayout} from "./Components/Content/MainPage";
import {LoginPassword} from "./Components/Registration & Login/LoginPassword";
import {Catalog} from "./Components/Catalog/Catalog";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={''} element={<Content/>}/>
                    <Route path={'catalog'} element={<Catalog/>}/>
                </Route>
                <Route path={'registration'} element={<Registration/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'login/password'} element={<LoginPassword/>}/>
            </Routes>
        </div>
    );
}

export default App;
