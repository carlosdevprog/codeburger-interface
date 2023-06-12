import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from "./hooks/UserContext"
import AppRoutes from "./routes/routes"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <UserProvider>
      <AppRoutes />
    </UserProvider>
      <GlobalStyles />
      <ToastContainer autoClose={2000} />

  </>
);


