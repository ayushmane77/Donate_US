// const express=require('express');
// const locationControlller=require('../controllers/locationController.js');
// const route=express.Router();
// route.get('/location',locationControlller.getLocation);
// module.exports=route;

const express=require('express');
const locationController=require('../controllers/locationController.js')
const restuarantController=require('../controllers/restuarantController.js');
const auth=require('../controllers/signUpController.js');
const product=require('../controllers/productsController.js');
// const upload=require('../middlewares/multerMiddleWare.js');
// const products=require('../models/productsDB.js');
const products =require('../models/productsDB.js')
// const uploadImage=require('../controllers/uploadImg.js');
const route=express.Router();
route.get('/location',locationController.getLocations);
route.get('/restuarants',restuarantController.getAllRestuarants);
route.get('/restuarants/:city',restuarantController.getRestuarantsByCity);
route.post('/register',auth.signUp);
route.post('/login',auth.login);
route.post('/createProducts',product.createProduct);

route.get('/getProducts',(req,res)=>{
    products.find()
    .then((product)=>{
        res.json(product)
    })
    .catch(err => res.json(err))
})
//                                             ✅
// route.post('/api/createproducts',upload.single('productImage'),async (req,res)=>{
// route.post('/api/createproducts',upload.single('image'),async (req,res)=>{    
//     try{
//         // const {productName,productDescription,price,category} = req.body;
//         const {fullName,mobileNumber,address,pincode,donationCategory} = req.body;
//         // const productName = req.body;
//         const productImage=req.file.path;
//         const product=new products({
//             // productName,
//             // productDescription,
//             // price,
//             // category,

//             fullName,
//             mobileNumber,
//             address,
//             pincode,
//             donationCategory,

//             productImage
//         });
//         await product.save()
//         .then((response)=>{
//             res.status(200).json({
//                 message:"product created successfully",
//                 newProduct:response
//             });
//         })
//         .catch((err)=>{
//             res.status(500).json({
//                 message:"products not created",
//                 error:err
//             });
//         });
//     }
//     catch(error){
//         console.error(error);
//         res.status(500).json({
//             message:"server error"
//         });
//     }
// });


module.exports=route;