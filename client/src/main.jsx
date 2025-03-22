import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './routes/HomePage.jsx'
import PostListPage from './routes/PostListPage.jsx'
import SinglePostListPage from './routes/SinglePostListPage.jsx'
import Write from './routes/Write.jsx'
import RegisterPage from './routes/RegisterPage.jsx'
import LoginPage from './routes/LoginPage.jsx'
import MAinLayout from './layouts/MAinLayout.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
<<<<<<< HEAD
=======
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';



const queryClient = new QueryClient()
>>>>>>> 7aa20d9 (React setup)

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
<<<<<<< HEAD
 {
  element: <MAinLayout />,
  children : [
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/posts",
      element: <PostListPage />
    },
    {
      path: "/:slug",
      element: <SinglePostListPage />
    },
    {
      path: "/write",
      element: <Write />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/register",
      element: <RegisterPage />
    },
  ]
 }
  
=======
  {
    element: <MAinLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/posts",
        element: <PostListPage />
      },
      {
        path: "/:slug",
        element: <SinglePostListPage />
      },
      {
        path: "/write",
        element: <Write />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <RegisterPage />
      },
    ]
  }

>>>>>>> 7aa20d9 (React setup)
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
<<<<<<< HEAD
    <RouterProvider router={router} />
=======
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer position='bottom-right'/>
      </QueryClientProvider>
>>>>>>> 7aa20d9 (React setup)
    </ClerkProvider>
  </StrictMode>,
)
