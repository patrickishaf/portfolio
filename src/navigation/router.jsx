import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routenames from "./routnames";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/About/AboutMe";
import Contact from "../components/Contact/Contact";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: routenames.home,
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: routenames.projects,
          element: <Projects />
        },
        {
          path: routenames.about,
          element: <AboutMe />,
        },
        {
          path: routenames.contact,
          element: <Contact />,
        },
      ],
    }
  ]);

  return <RouterProvider router={router} />
}