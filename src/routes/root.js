import express from 'express';
//import validateUser from '../controllers/root/validateUser';
//import userSignup from '../controllers/root/userSignup';
import createItem from '../controllers/root/createItem';

const root = express.Router()

//console.log(pool);
//root.get('/validateUser', validateUser);
root.get('/createItem', createItem);
//root.post('/userSignup', userSignup)

export default root