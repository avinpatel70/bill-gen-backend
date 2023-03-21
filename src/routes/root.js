import express from 'express';
import validateUser from '../controllers/root/validateUser';
import userSignup from '../controllers/root/userSignup';

const root = express.Router()

//console.log(pool);
root.get('/validateUser', validateUser)
//root.post('/userSignup', userSignup(pool))

export default root