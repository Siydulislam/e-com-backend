const router = require('express').Router();
const { createCategory, getCategories } = require('../controllers/categoryControllers');
const admin = require('../middlewares/admin');
const authorize = require('../middlewares/authorize');

router.route('/')
    .post([authorize, admin], createCategory)
    .post(getCategories);

module.exports = router;