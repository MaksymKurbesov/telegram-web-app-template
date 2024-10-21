import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './styles/main.css';
import '@mantine/core/styles.css';
import {MantineProvider, createTheme} from '@mantine/core';
import routes from "./routes";
import {RouterProvider} from "react-router-dom";

const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <MantineProvider theme={theme}>
        {/*<App/>*/}
        <RouterProvider router={routes}/>
      </MantineProvider>
    </StrictMode>,
)
