const { text } = require("express");
const aysncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
// @DESC   Create goals
// @route POST api/goals
// @access Private
const setGoals = aysncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json({ goal });
});
// @DESC   Get goals
// @route GET api/goals
// @access Private
const getGoals = aysncHandler(async (req, res) => {
  const goal = await Goal.find();
  res.status(200).json(goal);
});
// @DESC   Update goals
// @route PUT api/goals
// @access Private
const updateGoals = aysncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});
// @DESC   Delete goals
// @route DELETE api/goals
// @access Private
const deleteGoals = aysncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.remove();

  res.status(200).json({ mesage: `${req.params.id}` });
});

module.exports = {
  setGoals,
  getGoals,
  updateGoals,
  deleteGoals,
};
