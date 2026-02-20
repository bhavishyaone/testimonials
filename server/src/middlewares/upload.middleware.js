import multer from "multer";

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
  
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG, PNG, GIF, and WebP images are allowed"), false);
  }
};

export const upload = multer({
  storage,
  limits: { 
    fileSize: 5 * 1024 * 1024 
  },
  fileFilter
});

const videoFilter = (req, file, cb) => {
  const allowedMimeTypes = ['video/mp4', 'video/webm', 'video/quicktime', 'video/x-msvideo'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only MP4, WebM, MOV, and AVI videos are allowed"), false);
  }
};

export const uploadVideo = multer({
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024  
  },
  fileFilter: videoFilter
});
