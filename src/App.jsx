import "./App.scss";
// Importing pages
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurWork from "./pages/OurWork/OurWork";
import SingleWork from "./pages/SingleWork/SingleWork";
import ContactUs from "./pages/ContactUs/ContactUs";
// Router
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useRouteError,
} from "react-router-dom";

const Layout = () => {
    return (
        <div className="App">
            <Navbar />
            <Outlet />
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
