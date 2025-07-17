import {asyncHandler} from "../utils/asyncHandler.js"

const registerUser = asyncHandler(async (req, res) => {
    console.log("Register route hit"); // Debugging log

    return res.status(200).json({
        message: "ok"
    });
});




export {registerUser}