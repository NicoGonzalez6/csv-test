import sequelize from './db';

const connectAndSyncDb = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
  } catch (error) {
    console.log(error);
  }
};

export default connectAndSyncDb;
