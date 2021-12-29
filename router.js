const userController = require('./userController')

module.exports.setRouter = (app) => {
    /** get user */
    app.get('/getAllUser', userController.getAllUser)
    app.post('/createUser', userController.createUser)
    app.put('/updateUser', userController.updateUser)
    app.post('/deleteUser',userController.deleteUser)
}