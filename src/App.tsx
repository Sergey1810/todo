import React from 'react';
import Navbar from "./components/Navbar";
import {useRoutes} from 'react-router-dom'
import {AboutPage} from "./pages/AboutPage";
import {TodosPage} from "./pages/TodosPage";
import {ErrorPage} from "./pages/ErrorPage";

const App: React.FC = () => {
    const mainRoutes = {
        path: '/',
        children: [
            {path: '*', element: <ErrorPage/>},
            {path: '/About', element: <AboutPage/>},
            {path: '/Todo', element: <TodosPage/>},
        ],
    };

    const routing = useRoutes([mainRoutes]);
    return (
        <>
            <Navbar/>

            <div className="container">
                {routing}
            </div>

        </>
    );
}

export default App;
