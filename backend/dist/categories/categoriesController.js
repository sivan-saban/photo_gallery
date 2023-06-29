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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const random_word_slugs_1 = require("random-word-slugs");
const router = (0, express_1.Router)();
const defaultNumberOfCategories = 9;
router.route('/').get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let generatedWords = [];
        while (generatedWords.length < defaultNumberOfCategories) {
            const randomWord = (0, random_word_slugs_1.generateSlug)(1);
            generatedWords.push(randomWord);
        }
        return res.send(generatedWords);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
exports.default = router;
//# sourceMappingURL=categoriesController.js.map