import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage';
import ProjectsPage, { projectsLoader } from './pages/ProjectsPage';
import ProjectDetailPage, { projectDetailLoader } from './pages/ProjectDetailPage';
import ContactPage, { contactAction } from './pages/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p className="loading">Loading...</p>,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      {
        path: 'projects',
        children: [
          {
            index: true,
            element: <ProjectsPage />,
            loader: projectsLoader
          },
          {
            path: ':projectId',
            element: <ProjectDetailPage />,
            loader: projectDetailLoader
          }
        ]
      },
      {
        path: 'contact',
        element: <ContactPage />,
        action: contactAction
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={ router } />;
}

export default App;
