const GroupsModel = require('../models/GroupsModel');

module.exports = {
    getAllGroups: async function (req, res) {
        try{
        const result = await GroupsModel.getAllGroups(req.db);
        if (result) {
            res.json(result);
        } else {
            return false;
        }
        } catch (err) {
            console.log(err);
        }
    },
    createGroup: async function (req, res) {
        try{
            const new_group_name = req.body;
            const result = await GroupsModel.createGroup(req.db, {name: req.body.name});
        if (result) {
            res.json(result);
        } else {
            return false;
        }
        } catch (err) {
            console.log(err);
        }
    },
    deleteGroup: async function (req, res) {
        try{
            const group_id = req.body;
            const result = await GroupsModel.deleteGroup(req.db, {id: req.body.id});
        if (result) {
            res.json(result);
        } else {
            return false;
        }
        } catch (err) {
            console.log(err);
        }
    }
}