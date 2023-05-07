const cloudinary = require("cloudinary").v2;

exports.fileUpload = async (req, res) => {
  const uploadedImage = req.files.image;

  const result = await cloudinary.uploader.upload(uploadedImage.tempFilePath, {
    use_filename: true,
    folder: "maeve",
  });

  return res.status(201).json({
    src: result.secure_url,
  });
};
