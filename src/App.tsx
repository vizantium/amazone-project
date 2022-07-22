import React from 'react';
import './scss/app.scss';
import {Content} from "./Components/Content/Content";
import {Route, Routes} from "react-router-dom";
import {Registration} from "./Components/Registration & Login/Registration";
import {MainLayout} from "./Components/Content/MainPage";

const Cart = React.lazy(() => import('./Components/Cart/Cart'))
const SearchPage = React.lazy(() => import('./Components/SearchPage/SearchPage'))
const FullItem = React.lazy(() => import('./Components/FullItem/FullItem'))
const Catalog = React.lazy(() => import('./Components/Catalog/Catalog'))
const Login = React.lazy(() => import('./Components/Registration & Login/Login'))
const LoginPassword = React.lazy(() => import('./Components/Registration & Login/LoginPassword'))

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
