import { createImage, findImage } from '../service/imageService'
import path from 'path'

export const uploadImage = async (req, res) => {
    const {filename, mimetype, size, path} = req.file;
    const image = await createImage({filename, mimetype, size, path});
    res.json(image.rows[0]);
};

export const getImage = async (req, res) => {
    const { filename } = req.params;
    const imgName = await findImage(filename);
    const dirname = path.resolve();
    const fullfilepath = path.join(dirname, 'images/' + imgName.filename);
    return res.sendFile(fullfilepath);
}