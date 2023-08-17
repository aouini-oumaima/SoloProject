const mongoose = require("mongoose");
const flous= require("./model");
const mongoo = "mongodb://127.0.0.1/flousi";


mongoose
  .connect(mongoo, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("db mongo connected");
  })
  .catch((err) => console.log(err));
const db = mongoose.connection;


const add = (obj) => {
    return flous.create(obj)
}

const deleteOne = (id)=>{
return flous.findByIdAndDelete({_id:id});
}

const update = (id,data) => {
  return   flous.findOneAndUpdate({_id:id},data,{new:true});
}

const getAll = () => {
return flous.find()
};

module.exports={
  db,
  getAll,
   deleteOne,
update,
 add
}


  
 