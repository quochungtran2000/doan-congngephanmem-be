const { Router } = require('express');

const { 
    createUser, 
    login, 
    getAllUsers, 
    forgotPassword, 
    updateUser, 
    changePassword,
    getUserByUsername
} = require('../controllers/user');

const { 
    checkUserExits, 
    checkUser, 
    checkMatchPassword 
} = require('../validations/users');

const router = Router();

router.route('/').get(getAllUsers);

router.route('/').post(checkUser, getUserByUsername);

router.route('/add').post(checkUserExits,createUser);

router.route('/forgot').post(checkUser, forgotPassword);

router.route('/changepass').post(checkMatchPassword,changePassword);

router.route('/update').post(checkUser, updateUser);

router.route('/login').post(login);

module.exports = router;