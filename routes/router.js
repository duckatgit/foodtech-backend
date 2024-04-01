const express=require("express")
const router=express.Router()
const signupController=require("../controller/signupcontroller")
const restaurantController=require("../controller/restaurantcontroller")




router.post("/signup",signupController.signup)
router.post("/login",signupController.login)

/////////////restaurant //////////////////////////////////////////

router.post("/restaurants",restaurantController.restaurants)





////////////categories/////////////////////////////////////////

router.post("/categories",restaurantController.categories)






module.exports=router