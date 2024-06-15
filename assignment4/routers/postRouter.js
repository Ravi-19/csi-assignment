const router = require('express').Router() ; 
const postController = require('../controllers/postController') ; 

router.get('/getAllPost' , postController.getAllPostController) ; 

module.exports = router ; 