const express = require("express")
const { registerUser, loginUser, findMyProfile } = require("../controllers/registerUser")

const router = express.Router()

router.post('/register-user', registerUser)
router.post('/userlogin', loginUser)
router.get('/myprofile/:id', findMyProfile)

module.exports = router