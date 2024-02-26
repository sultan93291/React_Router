import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Blog from "./sections/Blog/Blog";
import Interior from "./sections/Interior/Interior";
import MainLayout from "./Layouts/MainLayout";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/interior" element={<Interior />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
