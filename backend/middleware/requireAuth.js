const jwt = require('jsonwebtoken') ; 
const User = require('../models/User'); 
const requireAuth = async (req,res,next) => {
    console.log("in middleware") ;
    
    try {
        const token = req.cookies.Authorization ; 
        console.log(token);

    const decoded = jwt.verify(token,process.env.SECRET) ;
    console.log(decoded) ; 
    
    console.log(decoded) ;
    const user = await User.findById(decoded.id);
    console.log(user) ;
    if(!user) {
        return res.status(401).json({message : "User not found"}) ;

    }else {
        req.user = user ; 
        console.log(user) ; 

    }
    next() ; 
    }catch(err) {
        res.status(401).json({message : err + "3asba" }) ; 
    }
}

module.exports = requireAuth ;