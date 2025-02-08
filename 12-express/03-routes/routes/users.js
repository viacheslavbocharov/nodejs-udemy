const express = require('express');
const {
    getUsersHandler,
    getSingleUserHandler,
    postUsersHandler,
} = require('../controllers/users.js');

const router = express.Router()

router.get('/', getUsersHandler);
router.get('/:userId', getSingleUserHandler);
router.post('/', postUsersHandler);

module.exports = router