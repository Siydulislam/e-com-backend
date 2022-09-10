const router = require('express').Router();
const {
    createProduct,
    getProductById,
    getProducts,
    updateProductById,
    getPhoto } = require('../controllers/productControllers');
const admin = require('../middlewares/admin');
const authorize = require('../middlewares/authorize');

router.route('/')
    .post([authorize, admin], createProduct)
    .get(getProducts);

router.route('/:id')
    .get(getProductById)
    .put([authorize, admin], updateProductById)

router.route('/photo/:id')
    .get(getPhoto);

module.exports = router;