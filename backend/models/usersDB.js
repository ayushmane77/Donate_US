const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const schema=mongoose.Schema;
const userSchema=new schema({
    username:{
        type:String,
        required:[true,"username is required"]
    },
    mobileNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    }
});


userSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();
});

module.exports=mongoose.model('acc',userSchema,'user')