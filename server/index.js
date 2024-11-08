import express from 'express';
import cors from 'cors';
import { initializeApp,  } from 'firebase-admin/app';
import admin from "firebase-admin";
import router from "./router.js";

const firebaseApp = initializeApp();
export const db = admin.firestore();

const app = express();
app.set("db", db);
app.use(cors());
app.use(express.json());
app.use('/', router)


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));