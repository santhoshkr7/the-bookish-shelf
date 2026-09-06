import { Router } from 'express';
import upload from '../middleware/uploadMiddleware.js';
import { getBooks, getBook, createBook, updateBook, deleteBook, updateProgress, getStats } from '../controllers/bookController.js';
const router = Router();
router.get('/stats', getStats); router.get('/', getBooks); router.get('/:id', getBook); router.post('/', upload.single('coverImage'), createBook); router.put('/:id', upload.single('coverImage'), updateBook); router.delete('/:id', deleteBook); router.patch('/:id/progress', updateProgress);
export default router;
