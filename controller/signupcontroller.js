const customer = require("../models/user")

module.exports={
    signup: async (req,res)=>{
        try {
            const otp =generateOTP()
            const createUser = await customer.create({
                phone_number: req.body.phone_number,
                name: req.body.name,
                email: req.body.email, 
                location:req.body.location,
                otp:otp
            })
            res.status(200).send({
                status: 200,
                message: "api working",
                body: createUser
            });

        } catch (error) {
            console.log(error)
        }
    },
    login: async (req, res) => {
        try {
            
            const getuserDetail = await customer.findOne({
                phone_number: req.body.phone_number,
            })
            if (!getuserDetail) {
                return res.status(404).send({
                    status: 404,
                    message: "Phone number not exist"
                })
            }
        
            res.status(200).send({
                status: 200,
                message: "login successfully",
                body: getuserDetail   
            });
        } catch (error) {
            console.log(error, 'error')
            return res.status(404).send({
                status: 404,
                message: "incorrect Number ",
            })
        }
    },
    

}
function generateOTP() {
 
    // Declare a digits variable
    // which stores all digits 
    let digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}
