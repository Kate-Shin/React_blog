import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import ListPage from './pages/ListPage';

const routes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/blogs',
    element: <ListPage />
  },
  {
    path: '/blogs/create',
    element: <CreatePage />,
    auth: true
  },
  {
    path: '/blogs/:id/edit',
    element: <EditPage />,
    auth: true
  }
];

export default routes;