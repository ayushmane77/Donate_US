const mongoose=require('mongoose');

const schema=mongoose.Schema;

const productSchema=new schema({
    fullName:{
        type:String,
        // required:true
    },
    mobileNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    // price:{
    //     type:String,
    //     // required:true
    // },
    donationCategory:{
        type:String,
        required:true
    },
    // image:{
    //     type:Object,
    //     required:true
    // }

    // productImage:{
    //     type:String,
    //     required:true
    // }
});

const products=mongoose.model('products',productSchema);
module.exports=products;