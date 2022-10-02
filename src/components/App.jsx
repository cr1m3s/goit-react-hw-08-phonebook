import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import operations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';

import AppBar from './AppBar';
import { Loader } from './Loader/Loader';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

const LoginView = lazy(() =>
  import('../pages/LoginView/LoginView' /* webpackChunkName: "login-view" */)
);
const RegisterView = lazy(() =>
  import(
    '../pages/RegisterView/RegisterView' /* webpackChunkName: "register-view" */
  )
);
const ContactsView = lazy(() =>
  import(
    '../pages/ContactsView/ContactsView' /* webpackChunkName: "contacts-view" */
  )
);

function App() {
  const dispatch = useDispatch();
  const isFetchCurrentUser = useSelector(authSelectors.getIsFetchCurrentUser);
  console.log(isFetchCurrentUser);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);
  return isFetchCurrentUser ? (
    <Loader />
  ) : (
    <div>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route element={<PublicRoute restricted redirectTo="contacts" />}>
            <Route path="/" element={<LoginView />} />
          </Route>
          <Route element={<PublicRoute restricted redirectTo="contacts" />}>
            <Route path="register" element={<RegisterView />} />
          </Route>
          <Route element={<PublicRoute restricted redirectTo="contacts" />}>
            <Route path="login" element={<LoginView />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsView />} />
          </Route>
          <Route element={<PublicRoute restricted redirectTo="contacts" />}>
            <Route path="*" element={<Navigate to="login" />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
