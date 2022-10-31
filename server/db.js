import pg from 'pg';

const { Pool } = pg

const localPoolConfig = {
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    port: '5432',
    database: 'test1'
};

const pool = new Pool(localPoolConfig);

export default pool;