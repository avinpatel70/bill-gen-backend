import config from '../../config.js';
import { pool } from '../../db.js';

/**
 * Health check endpoint
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const validateUser = async (req, res) => {
    let connection;
    try {
        connection = await pool.getConnection();
        const result = await connection.execute('SELECT * FROM users');
        res.send(result.rows);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error getting users');
      } finally {
        if (connection) {
          await connection.close();
        }
      }
    /*res.status(200).json({
        name: config.name,
        description: config.description,
        version: config.version
    });*/
}
export default validateUser