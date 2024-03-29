const UsersModel = require('../models/UsersModel');


module.exports = {
    createUser: async function (req, res) {

        let {email, username, password, password_repeat} = req.body;
        
        try {
            const result = await UsersModel.createUser(req.db, {email, username, password});
            res.redirect(global.react_dev_server + '/dashboard');
            console.log('Success');
        } catch (err) {
            console.log(err);
        }
    },
};