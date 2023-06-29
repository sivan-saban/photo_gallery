import 'dotenv/config';
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import imagesController from "./images/imagesController";
import categoriesController from "./categories/categoriesController"
const pixabayServer = express();

pixabayServer.use(express.json());
pixabayServer.use(express.urlencoded({extended: true}));
pixabayServer.use(bodyParser.json());
pixabayServer.use(cors());
pixabayServer.use('/images', imagesController);
pixabayServer.use('/categories', categoriesController);

pixabayServer.listen(8001);
console.log("Server is Up !");
