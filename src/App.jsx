import "./App.scss";
// Importing pages
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurWork from "./pages/OurWork/OurWork";
import SingleWork from "./pages/SingleWork/SingleWork";
import ContactUs from "./pages/ContactUs/ContactUs";
import { useState } from "react";
// Router
import {
    createBrowserRouter,
    RouterProvider,
    useRouteError,
    useOutlet,
    useLocation,
} from "react-router-dom";
//Animation
import { motion, AnimatePresence } from "framer-motion";
import { pageAnimation } from "./animation";

const AnimatedOutlet = () => {
    const o = useOutlet();
    const [outlet] = useState(o);

    return <>{outlet}</>;
};

const Layout = () => {
    const location = useLocation();
    return (
        <div className="App">
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" key={location.pathname}>
                    <AnimatedOutlet />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="ErrorPage">
            <Navbar />
            <div id="error">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <AboutUs />,
            },
            {
                path: "/work",
                element: <OurWork />,
            },
            {
                path: "/work/:id",
                element: <SingleWork />,
            },
            {
                path: "/contact",
                element: <ContactUs />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
