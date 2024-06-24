const User = require('../models/User') ; 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken') ; 

const { middleFingerGif } = require('../images/path') ; 

const login = async (req,res) => {
    const user = await User.findOne({email : req.body.email}) ; 
    if(!user) {
        return res.status(400).json({
            error : "User not found" 
        });
    }
    const isMatch = bcrypt.compareSync(req.body.password,user.password) ;
    if(!isMatch) { 
        return res.status(400).json({
            error : "Password is incorrect"
        });
    }
    const exp = Date.now() + 1000 *60 * 60 * 24  ;  
    const token = jwt.sign({id : user._id,exp : exp},process.env.SECRET) ; 

    res.cookie("Authorization", token, {
    expires : new Date(exp),
    httpOnly : true,
    sameSite : "lax" , 
    secure : process.env.NODE_ENV ==="production" 

});
     
    

    
    res.status(200).json({user : user , token : token}) ;

}

const checkAuth = (req,res) => {
    console.log(req.user) ; 
    res.status(200).json({
        message : "You are authenticated",
        user : req.user 
    }) ;

}

const checkOut = (req,res) => {
    res.clearCookie("Authorization") ; 
    res.status(200).json({
        message : "You are logged out , cookie deleted" 
    }) ;
}




//-------------------------------------------emailSender
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});

transporter.verify(function(error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: to,
        subject: subject,
        text: text ,
        attachments:[
            {
                filename: 'image.gif',
                path: middleFingerGif, // Correct path to your GIF file
                cid: 'middlefinger@nodemailer.com' // Optional, useful for embedding the image in the email body
                
            },
            
        ]
    };

    return transporter.sendMail(mailOptions);
};

const Singup = async (req, res) => {
    const { email, password } = req.body;

    if (password.length < 4) {
        return res.status(400).json({
            error: "Password must be at least 4 characters"
        });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);
    const user = new User({
        email: email,
        password: hashedPassword
    });

    try {
        await user.save();
        try {
            await sendEmail(email, "new 9erd has joined the club", "mar7ba bik nawertna");
            res.status(201).json({ message: "User registered and email sent" });
        } catch (emailError) {
            console.error('Failed to send email:', emailError);
            res.status(201).json({ message: "User registered but failed to send email" });
        }
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};




module.exports = {
    Singup , 
    login ,
    checkAuth , 
    checkOut , 
}

