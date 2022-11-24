const { Router } = require('express');
const { Activity } = require('../db');
const router = Router();

// router.get('/', async (req, res) => {
//   try {
//     const allActivities = await Activity.findAll({
//       attributes: ['id', 'name'],
//       order: [['name', 'ASC']],
//       group: 'name',
//     });
//     res.status(200).json(allActivities);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

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
