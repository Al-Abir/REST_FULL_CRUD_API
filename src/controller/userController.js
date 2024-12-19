const User = require('../model/userModel')
exports.create = async (req, res)=>{
    try{
     const userData = new User(req.body);
     const {firstName} = userData;
     const userExit = await User.findOne({firstName})
     if(userExit){
        return res.status(400).json({message:"User already exits"})
     }
     const savedUser = await userData.save();
     res.status(201).json({message:"Data is Created"})
    }catch(error){
       res.status(500).json({error:"Internal server Error"})
    }
}

exports.singleUserReadApi = async (req, res) => {
  try {
    const id = req.params.id;

    const singleUser = await User.findOne({ _id: id });

    if (!singleUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(singleUser);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// For updating data
exports.update = async (req, res)=>{
    try {
     
        const id = req.params.id;
       
        const userExist = await User.findOne({_id:id})
        if (!userExist){
            return res.status(404).json({message : "User not found."})
        }
     
        const updateUser = await User.findByIdAndUpdate(id, req.body, {new : true});
        res.status(201).json(updateUser);
    } catch (error) {
        
        res.status(500).json({error : " Internal Server Error. "})
    }
}


exports.deleteUser = async (req, res)=>{
    try {
        
        const id = req.params.id;
        const userExist = await User.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({message : " User Not Found. "})
        }
        await User.findByIdAndDelete(id);
     
        res.status(201).json({message : " User deleted Successfully."})
    } catch (error) {
        
        res.status(500).json({error : " Internal Server Error. "})
    }
}
