const router = require('express').Router()
const ProductController = require('../controllers/productController')
const authentication = require('../middleware/authentication')


router.get('/', ProductController.fetchProduct)


router.use(authentication)
// Product
router.post('/', ProductController.createProduct)
router.get('/:id', ProductController.fetchProductById)
router.put('/:id', ProductController.updateProduct)
router.delete('/:id', ProductController.deleteProduct)

module.exports = router