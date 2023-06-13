import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import AppProvider from "./hooks"
import AppRoutes from "./routes/routes"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
      <GlobalStyles />
      <ToastContainer autoClose={2000} />

  </>
)


