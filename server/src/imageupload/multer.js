const multer = require('multer');
const path = require('path');

const fileFilter = (req, file, cb) => {

    if(
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/png"
    ) {
        cb(null, true);
    } else {

        req.fileValidationError = "jpg, jpeg, png 파일만 업로드 가능";
        cb(null, false);
    }
};

const upload = multer({
    storage: multer.diskStorage ({
        destination: (req, file, done) => {
            done(null, "/test09");
        },
        filename: (req, file, done) => {
            
            const ext = path.extname(file.originalname);
            const fileName = path.basename(file.originalname, ext) + Date.now() + ext;

            done(null, fileName);
        },
    }),
    fileFilter: fileFilter,
    limits: { fileSize: 30 * 1024 * 1024},
});

module.exports = { upload };