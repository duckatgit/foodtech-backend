const shops  = require("../models/restaurant")
const Categories  = require("../models/categories")
const jwt = require("jsonwebtoken")
module.exports={
            restaurants: async (req,res)=>{
                try {
                    const addrestaurant = await shops.create({
                        restaurant_name: req.body.restaurant_name,
                        restaurant_location:req.body.restaurant_location,
                    })
                    const token = jwt.sign({ _id:addrestaurant._id, restaurant_location: addrestaurant.restaurant_location }, 'shhhhh');
                    await shops.findByIdAndUpdate(addrestaurant._id,
                        { $set: { token: token } },
                        { new: true });
                        addrestaurant.token = token;

                        console.log(token)
                  
                    res.status(200).send({
                        status: 200,
                        message: "api working",
                        body: addrestaurant
                    });
        
                } catch (error) {
                    console.log(error)
                }
            },
            categories:async(req,res)=>{
                try {
                    const authorization = req.headers.authorization
                    .replace("Bearer", "")
                    .trim();
                    const getrestaurant_token = await shops.findOne({
                        token: authorization,
                      });
                    const categories = await Categories.create({
                        category_name: req.body.category_name,
                        cuisine:req.body.cuisine,
                        restaurant_id:getrestaurant_token.id
                    })
                    console.log(categories.restaurant_id)
                    res.status(200).send({
                        status: 200,
                        message: "api working",
                        body: categories
                    });
                }    catch (error) {
                    console.log(error)
                }
            },

            //=================================get restaurants api ====================================
            

     

    }