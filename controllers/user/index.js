const createUser = require('./createUser')
const login = require('./login')
const getAllUsers = require('./getAllUsers')
const updateUser = require('./updateUser')
const forgotPassword = require('./forgotPassword')
const changePassword = require('./changePassword')
const getUserByUsername = require('./getUserByUsername')

module.exports = {
    createUser,
    login,
    getAllUsers,
    updateUser,
    forgotPassword,
    changePassword,
    getUserByUsername
}