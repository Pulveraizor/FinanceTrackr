const UsersModel = require('../models/UsersModel');

module.exports = {
    createUser: async function (req, res) {
        console.log('Inside User controller: ');
        console.log(req.body);

        let {email, username, password, password_repeat} = req.body;
        
        try {
            const result = await UsersModel.createUser(req.db, {email, username, password});
            res.redirect('/dashboard');
            console.log('Success');
        } catch (err) {
            console.log(err);
        }
    },
};