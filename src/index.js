import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import { ThemeProvider } from "@mui/styles";
import theme from './components/theme'
import { StyledEngineProvider } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';


ReactDOM.render(
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
            <React.StrictMode>
                <AuthProvider>
                    <App />
                </AuthProvider>
                <ToastContainer />
            </React.StrictMode>
        </ThemeProvider>
    </StyledEngineProvider>,
    document.getElementById('root')
);

