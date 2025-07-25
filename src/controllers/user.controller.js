import {asyncHandler} from "../utils/asyncHandler.js"
import{ApiError} from "../utils/ApiErrors.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const registerUser = asyncHandler(async (req, res) =>{

    // get user details from frontend 
    //validaton  - not empty
    //chek if user already exist : uernmae and email
    // check for images , chck for avatar
    // upload them to cloudinary,avatar
    // create user object - create entry in DB
    // remove password and refresh token field from response
    //check for user creation
    //return response


    const { fullName , email, username, password} = req.body
    console.log("email : " ,email);

    // if(fullName ===""){
    //     throw new ApiError(400,"fullname is required")
    // }

    if ([fullName, email, username, password].some(field => !field?.trim())) {
      throw new ApiError(400, "All fields are required");
    }

    const existedUser = await User.findOne({
        $or:[{ username },{ email }]
    })
    if(existedUser) {
        throw new ApiError(409 , "User with email or username already exist")
    }

    const avatarLocalPath=req.files?.avatar[0]?.path;
    const coverImageLocalPath=req.files?.coverImsge[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar files is required")  
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400,"Avatar files is required")
    }

    const user= await User.create({
        fullName,
        avatar: avatar.url,
        coverImage : coverImage?.url || "",
        email,
        password,
        username : username.toLowerCase()
    })

    const userCreated = await User.findById(user._id).select(
        "-password -refreshToken" // jo nhi chahaiye
    )

    if(!userCreated){
        throw new (500,"Something went wrong while registering the user")
    }
    return res.status(201).json(
        new ApiResponse(201,createdUser,"USER registered successfully")
    )





});




export {registerUser}