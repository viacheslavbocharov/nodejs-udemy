const express = require('express');
const commentsRouter = require('./comments.js');
const usersRouter = require('./users.js');
const rootRouter = require('./root.js');

const router = express.Router();

router.use('/comments', commentsRouter);
router.use('/users', usersRouter);
router.use('/', rootRouter);

module.exports = router;
