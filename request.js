const {default : mangoose}=require("mangoose");
const ExpenseSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter title"]
    },
    amount:{
        type:Number,
        required:[true,"Please enter amount"]
    },
    desc:{
        type:String
    }
});
module.exports=mongoose.model('Expenses',ExpenseSchema);