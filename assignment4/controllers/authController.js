// a user model object to mimic database 

const user = [{
    email :"ravi@gmail.com" , 
    password : "1234" 
} , 
  {
    email : "arjun@gmail.com"  , 
    password : "1234"
  }]


const signupController = async(req , res) => {
   try {
     // first fetch data from request 
     const {email  , password} = req.body ; 
     // apply some check for user is already present or having wrong input data 
     if(!email || !password) {
        return res.status(400).send("all field are required for signup") ; 
     } 
     // check user is already present or not 
     for (let i = 0 ; i < user.length ; i++) {
         if(user[i].email == email) {
            return res.status(400).send("user is already present") ; 
         }
     }
     // 
     const newUser = {email , password} ; 
     user.push(newUser) ; 
 
    return  res.status(201).send("user created successfully") ; 
   } catch (error) {
     console.log("error in signup :" , error ) ; 
    return  res.status(500).send("internal server error" , error.message) ; 
   }
}

const loginController = async(req , res) => {
    try {
      // first fetch data from request 
      const {email  , password} = req.body ; 
      // apply some check for user is already present or having wrong input data 
      if(!email || !password) {
        return  res.status(400).send("all field are required for signup") ; 
      } 
      // find user in data base 
      let isPresent = false ; 
      for (let i = 0 ; i < user.length ; i++) {
          if(user[i].email === email) {
              //check for password 
              if(user[i].password === password) {
                // everything is find 
                isPresent = true ; 
                break ; 
              }
              else {
                res.status(401).send("incorrect password") ; 
              }
          }
      }
      if(isPresent) {
      return res.status(200).send("login successfully") ; 
        // we can send any token , ( eg. JWT) when we login  successfully
      }else {
      return  res.status(404).send("user not found")  ; 
      }
    } catch (error) {
      console.log("error in login :" , error ) ; 
      return res.status(500).send(`internal server error: ${error}`) ; 
    }
 }


module.exports = {signupController, loginController} ; 