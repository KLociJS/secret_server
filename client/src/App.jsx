import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import CreateSecret from "./Pages/CreateSecret/CreateSecret";
import Home from "./Pages/Home/Home";
import Layout from "./Pages/Layout/Layout";
import NotFound from "./Pages/NotFound/NotFound";
import ViewSecret from "./Pages/ViewSecret/ViewSecret";

import { ROUTES } from "./Constants/Constants";

import "./App.css";
import "./global.css";

// Create the routes for the app
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={ROUTES.VIEW_SECRET} element={<ViewSecret />} />
      <Route path={ROUTES.CREATE_SECRET} element={<CreateSecret />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
