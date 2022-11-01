import { Router } from "express";
import { uploadImage, getImage } from '../controller/imageController'
import multer from "multer";
import path from 'path'

const router = new Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const imageUpload = multer({storage: storage});

router.post('/image', imageUpload.single('image'), uploadImage);
router.get('/image/:filename', getImage);

export default router;