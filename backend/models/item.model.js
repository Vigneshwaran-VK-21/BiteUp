import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop"
    },
    category: {
        type: String,
        enum: ["Snacks", 
            "Biryani",
            "Indian bread", 
            "Starters",
            "Gravy",
            "Pizza", 
            "Burgers",
            "Noodles/Pasta", 
            "Sandwiches",
            "Fried rice",
            "Dosa",
            "Drink/Beverages",
            "Grill/Tandoori",
            "Desserts",
            "Fast Food ",
            "All"
        ],
        required:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    foodType:{
        type:String,
        enum:["veg","non veg"],
        required:true
    },
   rating:{
    average:{type:Number,default:0},
    count:{type:Number,default:0}
   }
}, { timestamps: true })

const Item=mongoose.model("Item",itemSchema)
export default Item