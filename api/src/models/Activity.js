const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define(
    'activity',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
      },
      duration: {
        type: DataTypes.INTEGER,
      },
      season: {
        type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
        defaultValue: 'Verano',
      },
    },
    {
      timestamps: false,
    }
  );
};
