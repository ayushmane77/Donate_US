const users=require('../models/usersDB');

const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
exports.signUp=async (req,res)=>{
    const {email,username,password,mobileNumber}=req.body;
    const existingUser=await users.findOne({email});
    if(existingUser){
        return res.status(400).json({ message: "User already exists with this email" });
    }
    const user=new users({
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
        mobileNumber:req.body.mobileNumber
    });
    user.save()
    .then((response)=>{
        res.status(200).json({
            message:"user saved successfully",
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
exports.login=async(req,res)=>{
    try{
        const {username,password}=req.body;
        const user=await users.findOne({username});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }
        const token = jwt.sign({ email: user.email, userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
        // console.log(token);
        res.status(200).json({ message: "Login successful" });
    }

    catch(error){
        console.log(error);
    }

}    