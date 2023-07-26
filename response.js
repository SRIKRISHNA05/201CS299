const Expenses=require('./expense')
exports.getAllExpenses=async(req,res)=>{
    try{
        const expenses=await Expenses.find();
        res.send(expenses);
    }catch(err){
        console.log(err);
        res.send("Some problem happenes💔");
    }
}
exports.deleteExpenses=async(req,res)=>{
    try{
        await Expenses.findByIdAndDelete(req.params.id);
        res.send('Expense delete');
    }catch{
        res.send('Error Happend💔');
    }
}
exports.createExpenses=async(req,res)=>{
    try{
        await Expenses.create(req.body);
        res.send('Expenses created')
    }
    catch(err){
        if(err.name==='ValidationError'){
            const errMsg=Object.values(err.errors).map(val=>val.message);
            res.send(errMsg);
            return;
        }
        res.send("Error Happend💔")
    }
}
exports.updateExpenseById=async(req,res)=>{
    try{
        await Expenses.findByIdAndUpdate(req.params.id,req.body);
        res.send('Updated');
    }
    catch(err){
        res.send('error happened💔');
    }
}
exports.AdminCheck=async(req,res,next)=>{
    let isAdmin=true;
    if(isAdmin){
        next();
    }else{
        res.send('Authentication failure');
    }
}
exports.loggeing=async(req,res,next)=>{
    console.log(req.method);
    next();
}
}