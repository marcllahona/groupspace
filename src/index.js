import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import Apollo from './Apollo';
import theme from './lib/theme';
import { ThemeProvider } from 'styled-components';
import {RouterProvider} from "./components/RouterProvider";
import './styles/normalize.css';

const rootElement = document.getElementById('app-root');
const renderOrHydrate = rootElement.hasChildNodes() ? hydrate : render;

renderOrHydrate(
        <ThemeProvider theme={theme}>
            <RouterProvider>
                <Apollo>
                    <App />
                </Apollo>
            </RouterProvider>
        </ThemeProvider>,
  rootElement
);
