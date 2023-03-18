import { createBrowserRouter, redirect, RouteObject } from 'react-router-dom';
import Post from '../components/Post';
import ErrorPage from '../pages/Error';
import PostsPage from '../pages/Posts';

const routes: RouteObject[] = [
  {
    path: '/',
    errorElement: <ErrorPage />,
    loader: () => redirect('/posts'),
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
