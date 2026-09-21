const User = require('../models/user');
async function handelGetAllUser(req, res) {

    const allDbusers = await User.find();
    res.json(allDbusers);

}

async function getUserById(req, res) {

    const userID = req.params.id;
    const user = await User.findById(userID);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
}



async function updateUserById(req, res) {

    const userID = req.params.id;
    const user = await User.findByIdAndUpdate(userID
        , req.body, { new: true });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User updated successfully', user });
}

async function deleteUserById(req, res) {

    const userID = req.params.id;
    const user = await User.findByIdAndDelete(userID);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully', user });
}
async function createUser(req, res) {

    const user = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        job_title: req.body.job_title
    });
    res.status(201).json({ message: 'User created successfully', user });


}


module.exports = {
    handelGetAllUser,
    getUserById,
    updateUserById,
    deleteUserById,
    createUser
}
