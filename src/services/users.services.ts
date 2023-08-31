import FileModel from '../models/files';
import { Op } from 'sequelize';

export const getInfo = async (query: string) => {
  const lowerCaseQuery = query?.toLocaleLowerCase() || '';

  const results = await FileModel.findAll({
    where: {
      [Op.or]: [
        {
          name: {
            [Op.like]: `%${lowerCaseQuery}%`,
          },
        },
        {
          city: {
            [Op.like]: `%${lowerCaseQuery}%`,
          },
        },
        {
          country: {
            [Op.like]: `%${lowerCaseQuery}%`,
          },
        },
        {
          favorite_sport: {
            [Op.like]: `%${lowerCaseQuery}%`,
          },
        },
      ],
    },
  });

  return results.map((res) => res.dataValues);
};
