const express = require('express')
const router = express.Router()
const {setGoals,getGoals,updateGoals,deleteGoals} = require('../controllers/goalController')

router.post('/', setGoals)
router.get('/', getGoals)
router.put('/:id', updateGoals)
router.delete('/:id', deleteGoals)

module.exports = router
