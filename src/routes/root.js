import express from 'express';
//import validateUser from '../controllers/root/validateUser';
//import userSignup from '../controllers/root/userSignup';
import createItem from '../controllers/root/createItem';
import createBusiness from '../controllers/root/createBusiness';

const root = express.Router()

//console.log(pool);
//root.get('/validateUser', validateUser);
root.post('/createItem', createItem);
root.post('/createBusiness', createBusiness);
//root.post('/userSignup', userSignup)

export default root