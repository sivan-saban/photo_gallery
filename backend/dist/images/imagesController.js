"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const apiKey = process.env["PIXABAY_API_KEY"];
const router = (0, express_1.Router)();
const defaultImagesPerPage = 9;
router.route('/').post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category, page } = req.body;
        if (!category || !page) {
            return res.status(400).send("Required parameters are missing");
        }
        const responseFromPixabay = (yield axios_1.default.get(`https://pixabay.com/api/?key=${apiKey}&q=${category}&per_page=${defaultImagesPerPage}&page=${page}`)).data;
        responseFromPixabay.hits = responseFromPixabay.hits.sort((a, b) => a.id - b.id); // sort the images by increasing id
        return res.json(responseFromPixabay);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
exports.default = router;
//# sourceMappingURL=imagesController.js.map