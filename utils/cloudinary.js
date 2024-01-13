const cloudinary = require("cloudinary.v2");
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});


const uploadOnCloudinary= async (localFilePath)=>{
    try{
        if(!localFilePath){
            return null
        }
        //upload the file on cloudinary
        const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })

        //file has been uploaded successfully
        console.log("file is uploaded on cloudinary", response.url);

        return response;
    }catch(error){
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null; 
    }
}


module.exports=uploadOnCloudinary;

// cloudinary.uploader.upload(
//   "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function (error, result) {
//     console.log(result);
//   }
// );
