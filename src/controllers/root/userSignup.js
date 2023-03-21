import { pool } from '../../db.js';

const userSignup = async (req, res) => {
    let connection;
    try {
        connection = await pool.getConnection();
        const query = `INSERT INTO users (name, email, password) VALUES (:name, :email, :password)`;
        const result = await connection.execute(query, [req.body.name, req.body.email, req.body.password]);
        await connection.commit();
        res.status(200).send({ message: 'User registered successfully' });
      } catch (err) {
        console.error(err);
        res.status(500).send('Error registering user');
      } finally {
        if (connection) {
          await connection.close();
        }
      }
}

export default userSignup