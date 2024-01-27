import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Pages/Layout/Layout";
import ViewSecret from "./Pages/ViewSecret/ViewSecret";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='view-secret' element={<ViewSecret />} />
      <Route path='create-secret' element={<ViewSecret />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
