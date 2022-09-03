const aysncHandler = require('express-async-handler')

// @DESC   Create goals
// @route POST api/goals   
// @access Private   
const setGoals = aysncHandler (async (req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field');
    }
    res.status(200).json({mesage: `Create goals`})
})
// @DESC   Get goals
// @route GET api/goals   
// @access Private   
const getGoals = aysncHandler (async (req, res) =>{
    res.status(200).json({mesage: `Get goals`})
})
// @DESC   Update goals
// @route PUT api/goals   
// @access Private   
const updateGoals = aysncHandler (async (req, res) =>{
    res.status(200).json({mesage: `Update goals ${req.params.id}`})
})
// @DESC   Delete goals
// @route DELETE api/goals   
// @access Private   
const deleteGoals = aysncHandler (async (req, res) =>{
    res.status(200).json({mesage: `Delete goals ${req.params.id}`})
})

module.exports = {
    setGoals,
    getGoals,
    updateGoals,
    deleteGoals,
}