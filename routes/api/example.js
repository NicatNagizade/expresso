const express = require('express')
const router = express.Router()
const Controller = require('../../app/http/controllers/example')

router.get('', (...params) => { new Controller(...params).method('index') })
router.post('', (...params) => { new Controller(...params).method('store') })
router.get('/:id', (...params) => { new Controller(...params).method('show') })
router.put('/:id', (...params) => { new Controller(...params).method('update') })
router.delete('/:id', (...params) => { new Controller(...params).method('destroy') })

module.exports = router