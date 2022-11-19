const axios = require('axios');
const { Router } = require('express');
const { Country, Activity, Op } = require('../db');
const mapCountries = require('../middlewares/mapCountries');

const router = Router();

router.get('/', async (req, res) => {
  try {
    let { name } = req.query;

    if (!name) {
      const allCountries = await Country.findAll({
        attributes: ['id', 'name', 'continent', 'flag'],
        order: [['name', 'ASC']],
      });
      res.status(200).json(allCountries);
    } else {
      name = name[0].toUpperCase() + name.substring(1);

      const countries = await Country.findAll({
        where: {
          name: {
            [Op.startsWith]: name,
          },
        },
      });

      if (countries.length < 1)
        throw new Error('There is no country with that name');

      res.status(200).json(countries);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get('/bulk', async (req, res) => {
  try {
    const response = await axios('https://restcountries.com/v3/all');
    const data = response.data;

    const countries = mapCountries(data);
    const newCountries = await Country.bulkCreate(countries);

    res.status(200).json(newCountries);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const countryByPk = await Country.findByPk(id, {
      include: [
        {
          model: Activity,
          attributes: ['name', 'difficulty', 'duration', 'season'],
          through: {
            attributes: [],
          },
        },
      ],
    });

    if (!countryByPk) throw new Error('Country no exist');

    return res.status(200).json(countryByPk);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
