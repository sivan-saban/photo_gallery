import {Router} from "express"
import {generateSlug} from "random-word-slugs";

const router = Router();
const defaultNumberOfCategories = 9;

router.route('/').get(async (req, res) => {
    try {
        let generatedWords = [];
        while (generatedWords.length < defaultNumberOfCategories) {
            const randomWord = generateSlug(1);
            generatedWords.push(randomWord)
        }
        return res.send(generatedWords)
    } catch (e) {
        return res.status(500).send(e);
    }
});

export default router;