import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { ProfileView } from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile/:id",
    element: <ProfileView />,
  },
])

export function Routes() {
  return <RouterProvider router={router} />
}