import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Pages
import { Layout } from '../pages/Layout';
import { HomePage } from '../pages/HomePage';
import { GamePage } from '../pages/GamePage';
import { ErrorPage } from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/games/:slug',
        element: <GamePage />,
      },
    ],
  },
]);

export function RoutesProvider(): JSX.Element {
  return <RouterProvider router={router} />;
}
