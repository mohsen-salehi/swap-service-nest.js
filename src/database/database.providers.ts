import { Sequelize } from 'sequelize-typescript';
import { Transaction } from '../swap/transaction.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: 'root',
        database: 'swap_db',
      });
      sequelize.addModels([Transaction]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
