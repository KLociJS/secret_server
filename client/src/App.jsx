import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import CreateSecret from "./Pages/CreateSecret/CreateSecret";
import Home from "./Pages/Home/Home";
import Layout from "./Pages/Layout/Layout";
import ViewSecret from "./Pages/ViewSecret/ViewSecret";

import "./App.css";
import { NAV_LINKS } from "./Constants/Constants";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={NAV_LINKS.VIEW_SECRET} element={<ViewSecret />} />
      <Route path={NAV_LINKS.CREATE_SECRET} element={<CreateSecret />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
