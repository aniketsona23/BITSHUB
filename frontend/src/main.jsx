import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={"13085285403-q58e36vjmvmg2d60pgpl62b1hoc14s3m.apps.googleusercontent.com"}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);