import { createBrowserRouter } from "react-router";
import { Dashboard } from "./pages/app/dashboard";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignIn } from "./pages/auth/sign-in";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {path: '/', element: <Dashboard />}
    ]
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {path: '/sign-in', element: <SignIn />}
    ]
  }

  // { path: '/', element: <Dashboard />},
  // 
])