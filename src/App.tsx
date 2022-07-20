import React from 'react';
import './scss/app.scss';
import {Content} from "./Components/Content/Content";
import {Route, Routes} from "react-router-dom";
import {Registration} from "./Components/Registration & Login/Registration";
import {Login} from "./Components/Registration & Login/Login";
import {MainLayout} from "./Components/Content/MainPage";
import {LoginPassword} from "./Components/Registration & Login/LoginPassword";
import {Catalog} from "./Components/Catalog/Catalog";
import {FullItem} from "./Components/FullItem/FullItem";
import {Cart} from "./Components/Cart/Cart";
import {SearchPage} from "./Components/SearchPage/SearchPage";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={''} element={<Content/>}/>
                    <Route path={'catalog'} element={
                        <React.Suspense fallback={<div>Download...</div>}>
                            <Catalog/>
                        </React.Suspense>
                    }/>
                    <Route path={'fullItem'} element={
                        <React.Suspense fallback={<div>Download...</div>}>
                            <FullItem/>
                        </React.Suspense>
                    }/>
                    <Route path={'cart'} element={
                        <React.Suspense fallback={<div>Download...</div>}>
                            <Cart/>
                        </React.Suspense>
                    }/>
                    <Route path={'/search'} element={
                        <React.Suspense fallback={<div>Download...</div>}>
                            <SearchPage/>
                        </React.Suspense>
                    }/>

                </Route>
                <Route path={'registration'} element={<Registration/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'login/password'} element={<LoginPassword/>}/>
            </Routes>
        </div>
    );
}

export default App;
