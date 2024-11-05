import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './styles/main.css';
import '@mantine/core/styles.css';
import {MantineProvider, createTheme} from '@mantine/core';
import routes from "./routes";
import {RouterProvider} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {TaskService} from "./api/Tasks.ts";


const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
});

const firebaseConfig = {
  apiKey: "AIzaSyDumVxEN7rQw7hge8BaslV4gBKu6bTG9cc",
  authDomain: "tg-web-app-template.firebaseapp.com",
  projectId: "tg-web-app-template",
  storageBucket: "tg-web-app-template.firebasestorage.app",
  messagingSenderId: "250589232216",
  appId: "1:250589232216:web:3ca4ae437a1ed9543f1e2d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const taskService = new TaskService(db);


createRoot(document.getElementById('root')!).render(
    // <StrictMode>
      <MantineProvider theme={theme}>
        {/*<App/>*/}
        <RouterProvider router={routes}/>
      </MantineProvider>
    // </StrictMode>,
)
