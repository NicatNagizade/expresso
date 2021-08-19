const express = require('express')
const router = express.Router()
const ExampleController = require('../../app/http/controllers/example')

router.get('', (...params) => { new ExampleController(...params).method('index') })
router.post('', (...params) => { new ExampleController(...params).method('store') })
router.get('/:id', (...params) => { new ExampleController(...params).method('show') })
router.put('/:id', (...params) => { new ExampleController(...params).method('update') })
router.delete('/:id', (...params) => { new ExampleController(...params).method('destroy') })

module.exports = router