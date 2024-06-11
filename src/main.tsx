import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainPage from 'pages/Main';
import MaterialPage from 'pages/Material';
import ErrorPage from 'pages/Error';
import { store } from 'store/store';
import Error from 'components/Error';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/omk_recruitment',
    element: <MainPage />,
    errorElement: <Error />
  },
  {
    path: '/omk_recruitment/:id',
    element: <MaterialPage />,
    errorElement: <Error />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

ReactDOM.createRoot(
  document.getElementById('root-personnel-selection') as HTMLElement
).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
