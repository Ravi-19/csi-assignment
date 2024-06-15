const getAllPostController = (req ,res) => {
    try {
        // fetch id of user from req and find its post from data base 
        //but right now we dont have any DB so simply return a response 
        return res.status(200).send("here is all post") ; 
    } catch (error) {
        return res.status(500).send("internal server error" , error.message) ; 
    }
}

module.exports = {getAllPostController} ; 