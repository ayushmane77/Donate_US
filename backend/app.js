// const express=require('express');
// const route=require('./routes/index.js');
// const app=express();
// app.use('/',route);
// app.get('/',(req,res)=>{
//     res.end("hello world");
// });
// const PORT=4500;
// app.listen(PORT,()=>{
//     console.log(`server is running on localhost:${PORT}`);
// });


const express=require('express');
const route=require('./routes/index.js')
const mongoose=require("mongoose");
const cors=require('cors');
const bodyparser=require('body-parser');
require('dotenv').config();
const multer=require('multer');   //☕☕☕☕☕

const app=express();
app.use(cors());
const PORT=process.env.PORT;

const storage = multer.diskStorage({              //☕☕☕☕☕☕☕
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
         cb(null,file.originalname)
    }
  })
  
  

const upload=multer({storage: storage});           // ☕☕☕☕☕
// const upload=multer({dest:'uploads/'})

// app.use(express.json());

app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:false}))
app.use('/',route);
app.get('/',(req,res)=>{
    res.end("hello world");
});
                                //  ✅
app.post('/upload',upload.single('image'),(req,res)=>{        // ☕☕☕☕☕☕
    res.json(req.file);
});
// const localDBURL="mongoDb://127.0.0.1/"

const atlas=process.env.MONGO_URI;

mongoose.connect(atlas,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(res=>{
    app.listen(PORT,()=>{
        console.log(`server is running on the localhost:${PORT}`);
    });
})
.catch(error=>{
    console.log(error);
});
