import sequelize from '../config/db';

import { DataTypes } from 'sequelize';

const Files = sequelize.define('files', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  favorite_sport: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Files;
