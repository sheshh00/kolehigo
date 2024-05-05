const mysql = require('mysql2/promise');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'colleges',
});

async function alterDB() {
    try {
        const connection = await db;
        await connection.query('ALTER TABLE colleges ADD COLUMN `isAdded` BOOLEAN DEFAULT FALSE');
    } catch (error) {
        console.log(error);
    }
}

alterDB();
