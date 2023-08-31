import FileModel from '../models/users';
import { Op } from 'sequelize';

export const getInfo = async (query: string) => {
  const lowerCaseQuery = query?.toLocaleLowerCase() || '';

  const users = await FileModel.findAll({
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

  const formattedUsers = users.map((res) => res.dataValues);

  const totalUsers = await FileModel.count({
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

  return { users: formattedUsers, totalUsers };
};
