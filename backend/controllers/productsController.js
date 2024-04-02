const addproducts=require('../models/productsDB.js');
exports.createProduct=async (req,res)=>{
    const {fullName,mobileNumber,address,pincode,donationCategory} = req.body;
    const products= await new addproducts({
        fullName,mobileNumber,address,pincode,donationCategory
    });
    products.save()
    .then((response)=>{
        res.status(200).json({
            message:"product saved successfully",
            newuser:response
        });
    })
    .catch((err)=>{
        res.status(500).json({
            message:"user is not created",
            error:err
        });
    });
}
