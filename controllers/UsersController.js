const UsersModel = require('../models/UsersModel');

module.exports = {
    createUser: async function (req, res) {
        console.log('Inside User controller: ');
        console.log(req.body);

        let {username, password, password_repeat} = req.body;
        
        try {
            const result = await UsersModel.createUser(req.db, {username, password});
            // res.redirect('/dash');
            console.log('Success');
        } catch (err) {
            console.log(err);
        }
    },
};