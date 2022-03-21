const  express = require("express");

const {body,validationResult} = require("express-validator");

const router = express.Router();

router.post("/", body("firstName").trim().not().isEmpty().withMessage("first Name cannot be empty ").isLength({min:3,max:30}).withMessage("first Name must be at least 4charchter"),
body("age").not().isEmpty().withMessage("Age cannot be empty").isNumeric().withMessage("age must be number b/w 1 and 150").custom((val)=>{
    if(val<1 || val>150){
        throw new Error ("Incorrect age provided");
    }
    return true;
}),
async (req,res)=>{

    try {
       const errors = validationResult(req);
       if(!errors.isEmpty()){
           return res.status(400).send({errors:errors.array()});

           const user = await User.create(req.body);

           return res.status(201).send(user)
       }
        
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
}
);

module.exports =router;