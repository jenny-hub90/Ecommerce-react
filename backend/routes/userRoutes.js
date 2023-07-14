import express from 'express';
const router = express.Router();

import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUsers,
    getUsersByID,
    updateUser
} from '../controllers/userController.js';

router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.post('/profile').get(getUserProfile).put(updateUserProfile);
router.post('/:id').delete(deleteUsers).get(getUsersByID).put(updateUser);


export default router;