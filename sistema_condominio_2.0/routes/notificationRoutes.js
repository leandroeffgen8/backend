import { Router } from 'express';
const router = Router();

//controller
import { createNotification, deleteNotification, getAllNotification, updateNotification } from '../controllers/notificationController.js';

//middleware
import { validate } from '../middleware/handleValidation.js';
import { authGuard } from '../middleware/authGuard.js'
import { notificationValidation } from '../middleware/notificationValidation.js';

//routes
router.post('/create', authGuard, notificationValidation(), validate, createNotification)
router.get('/all', authGuard, getAllNotification);
router.put('/:id', authGuard, updateNotification);
router.delete('/:id', authGuard, deleteNotification);

export default router;


