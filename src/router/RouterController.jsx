import { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Login from '../routes/Login/Login';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';


export default function RouterController() {

    const token = useSelector(state => state.token);

    const NotFound = lazy(() => import('../routes/NotFound/NotFound'))
    const Home = lazy(() => import('../routes/Home/Home'))

    const Elements = {
        Home: <Home />,
    }

    const permissions = [
        {
            nombre: 'Home',
            path: '/home'
        }
    ]
    console.log(token);
    if (!token) return (

        <Router>
            <Suspense fallback={<LoadingScreen />}>
                <Routes>
                    {[{ name: '*', element: <Navigate to="/" /> }, { name: '/', element: <Login /> }].map((e, idx) => (
                        <Route exact path={e.name} element={e.element} key={idx}></Route>
                        ))}
                </Routes>
            </Suspense>
        </Router>
    )

    return (
        <>
            <Router>
                <Suspense fallback={<LoadingScreen/>}>
                    {
                        // permissions &&
                        <Routes>
                            {permissions.map((e, idx) => (
                                <Route exact path={e.path} element={Elements[e.nombre]} key={idx} >
                                </Route>
                            ))}
                            <Route exact path="*" element={<NotFound />}></Route>
                            <Route exact path='/' element={<Navigate to={permissions.find(permission => permission.nombre === 'Home').path} />}></Route>
                        </Routes>
                    }
                </Suspense>
            </Router>
        </>
    )
}