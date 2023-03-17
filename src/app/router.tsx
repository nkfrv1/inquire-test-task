import { createBrowserRouter, RouteObject } from 'react-router-dom';
import ErrorPage from '../pages/Error';
import HomePage from '../pages/Home';
import PostsPage from '../pages/Posts';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/posts',
    element: <PostsPage />,
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
