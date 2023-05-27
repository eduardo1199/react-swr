import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Issues } from "./pages/Issues";
import { Public } from "./pages/Public";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Public />,
  },
  {
    path: "/issues/:id",
    element: <Issues />,
  },
])

export function Routes() {
  return <RouterProvider router={router} />
}