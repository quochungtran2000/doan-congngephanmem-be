const { Router } = require('express');

const { createUser, login, getAllUsers} = require('../controllers/user')

const { checkUserExits } = require('../validations/users')

const router = Router();

router.route('/').get(getAllUsers)

router.route('/add').post(checkUserExits,createUser)

router.route('/login').post(login)

module.exports = router;