import express from "express";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes


export { app };