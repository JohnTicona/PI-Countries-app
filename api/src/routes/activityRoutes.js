const { Router } = require('express');
const { Activity } = require('../db');
const router = Router();

router.post('/', async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    if (!name || !difficulty || !duration || !season || countries.length === 0)
      throw new Error('missing data');

    const newActivity = { name, difficulty, duration, season };
    const activity = await Activity.create(newActivity);

    res.status(201).json(await activity.addCountry(countries));
  } catch (error) {
    res.status(404).json(error.message);
  }
});

module.exports = router;
