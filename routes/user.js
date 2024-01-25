const { Router } = require('express');
const {signup, login} = require('../controllers/auth')
const auth = require('../middlewares/auth');
const {updateProfile} = require('../controllers/user')

const router = Router();

router.post('/signup',signup)
router.post('/login',login)

router.patch('/update/:id', auth, updateProfile)

module.exports = router;