const express = require('express');
const router = express.Router(); 
const {getAllEmpList,empRegistration,getEmpById,demo,empLogin} = require('../controler/EmpController')

router.use(express.json());

router.post('/empRegistration', empRegistration);

router.post('/empLogin', empLogin);

router.get('/', getAllEmpList);

router.get('/:id', getEmpById);

// router.put('/:id', updateUserById);

// router.delete('/:id', deleteUserById);

module.exports = router;
