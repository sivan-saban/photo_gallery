"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const imagesController_1 = __importDefault(require("./images/imagesController"));
const categoriesController_1 = __importDefault(require("./categories/categoriesController"));
const pixabayServer = (0, express_1.default)();
pixabayServer.use(express_1.default.json());
pixabayServer.use(express_1.default.urlencoded({ extended: true }));
pixabayServer.use(body_parser_1.default.json());
pixabayServer.use((0, cors_1.default)());
pixabayServer.use('/images', imagesController_1.default);
pixabayServer.use('/categories', categoriesController_1.default);
pixabayServer.listen(8001);
console.log("Server is Up !");
//# sourceMappingURL=index.js.map