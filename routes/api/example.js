const express = require('express')
const router = express.Router()
const ExampleController = require('../../app/http/controllers/example')

router.get('', ExampleController.index)
router.post('', ExampleController.store)
router.get('/:id', ExampleController.show)
router.put('/:id', ExampleController.update)
router.delete('/:id', ExampleController.destroy)

module.exports = router