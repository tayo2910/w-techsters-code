const User = require ('../models/userModel');
const Student = require ('../models/studentModel');
const {generateToken} = require("../config/jwtToken");
const jwt = require("jsonwebtoken");
const validateMongoDbId = require("../config/validateMongoDbId");


//Register a User
const registerAUser = async (req, res) =>{
    const email = req.body.email;
    const findUser = await User.findOne({email: email});
    if(!findUser) {
        const newUser = await User.create(req.body)
        res.status(200).json(newUser);
    }  
    else {
        throw new Error('user already exists')
    };

}


//login a user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    const findUser = await User.findOne({email: email});
    if(findUser && (await findUser.isPasswordMatched(password))) {
        res.status(200).json({
            status: true,
            message: "Logged in successfully",
            token: generateToken(findUser?._id),
            role: findUser?.userType,
            username: findUser?.firstName + " " +  findUser?.lastName,
        });
    } else {
        throw new Error ("Invalid credentials");
    }
};

//get all users
const getAllUsers = async (req, res)=>{
    try {
        const allUsers= await User.find()
        res.status(200).json({
            status: true,
            message: "All users successfully fetched",
            allUsers,
        })
    } catch (error) {
        throw new Error("error")
    }
};

//get a user
const getAUser = async(req, res) => {
    const { id } = req.params;
    try {
    const getUser = await User.findById(id);
    res.status(200).json({
        status: true,
        message: "User Found",
        getUser
    })
    } catch (error) {
        throw new Error (error)
    }
}


//update a user
const updateUser = async (req, res) => {
    const {_id} = req.user;
    validateMongoDbId(_id);
    try {
        const user = await User.findByIdAndUpdate(_id, req.body, {new: true});
        res.status(200).json({
            status: true, 
            message: "Updated successfully.",
            user 
        })
    } catch (error) {
        throw new Error(error)
    }
};

//delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteAUser = await User.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: "Deleted successfully.",
            deleteAUser
        })
    } catch (error) {
        throw new Error (error)
    }
}

module.exports = {registerAUser, loginUser, getAllUsers, updateUser,  deleteUser, getAUser};