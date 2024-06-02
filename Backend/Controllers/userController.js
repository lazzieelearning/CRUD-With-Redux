import User from "../Models/userModel.js";

export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "User Retrieved Successfully",
      result: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error in get user" });
  }
};


export const createUser = async (req, res) => {
    try {
      const newuser = new User(req.body);
      await newuser.save();
      res.status(200).json({
        message: "user Created Successfully",
        result: newuser,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Internal server error in create user" });
    }
  };

  export const updateUser = async(req,res) =>{
    try {
      const id = req.params.id
      const updatedUser = await User.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
       age:req.body.age
      })
      res.status(200).json({
        message: "User Updated Successfully",
        result: updatedUser
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Internal server error in update user" });
    }
    }
  
    export const deleteUser = async(req,res) =>{
      try {
        const id = req.params.id
        const deletedUser = await User.findByIdAndDelete({_id:id})
        res.status(200).json({
          message: "User Deleted Successfully",
          result: deletedUser
        });
      } catch (error) {
        console.log(error);
        res
         .status(500)
         .json({ message: "Internal server error in delete user" });
      }
    }