const express = require('express');
const router = express.Router(); 

const {handelGetAllUser,getUserById,updateUserById,createUser,deleteUserById} = require('../controller/user');

router.use(express.json());

router.post('/', createUser);

router.get('/', handelGetAllUser);

router.get('/:id', getUserById);

router.put('/:id', updateUserById);

router.delete('/:id', deleteUserById);

module.exports = router;
