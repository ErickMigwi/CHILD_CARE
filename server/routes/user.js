const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const upload = require('../Config/multer')
router.post('/createaccount', userController.registerUser)
router.post('/login', userController.login)
router.get('/getUser', userController.getAuthenticatedUser)
router.post('/updateprofileimage',upload.single('image'), userController.updateprofileImage)
router.get('/userDetails', userController.getUser)
router.post('/updateprofile', userController.updateprofile)
module.exports = router