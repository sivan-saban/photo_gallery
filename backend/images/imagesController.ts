import {Router} from "express";
import axios from "axios";

const apiKey = process.env["PIXABAY_API_KEY"];
const router = Router();
const defaultImagesPerPage = 9;




router.route('/').post(async (req, res) => {
   try {
       const {category, page} = req.body;
       if (!category || !page) {
           return res.status(400).send("Required parameters are missing")
       }
       const responseFromPixabay = (await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${category}&per_page=${defaultImagesPerPage}&page=${page}`)).data;
       responseFromPixabay.hits = responseFromPixabay.hits.sort((a, b) => a.id - b.id); // sort the images by increasing id
       return res.json(responseFromPixabay);
   } catch (e) {
       return res.status(500).send(e);
   }
});

export default router;