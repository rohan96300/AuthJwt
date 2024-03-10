import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";

const authUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        generateToken(res, user._id);

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(400).json({
            message: "incorrect email or password!!"
        });
    }
});

export { authUser };