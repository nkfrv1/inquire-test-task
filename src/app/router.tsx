import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Post from '../components/Post';
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
  {
    path: '/posts/:id',
    element: <Post />,
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
