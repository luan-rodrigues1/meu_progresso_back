import { config } from 'dotenv';
config();
import { DataSource } from 'typeorm';
import { dataSourceOptions } from './config/typeorm.config';

const AppDataSource = new DataSource(dataSourceOptions);

export default AppDataSource;
