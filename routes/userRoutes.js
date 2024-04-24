const express = require('express');
const { registerAUser, loginUser, getAllUsers, updateUser, deleteUser, getAUser } = require('../controllers/userController');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');
const userRouter = express.Router();


userRouter.post('/register', registerAUser);
userRouter.post('/login', loginUser);
userRouter.get('/:id', authMiddleware, getAUser );
userRouter.get('/allUsers', isAdmin, getAllUsers );
userRouter.put('/update-profile',authMiddleware, updateUser );
userRouter.delete('/:id', authMiddleware,isAdmin, deleteUser );




module.exports = userRouter;