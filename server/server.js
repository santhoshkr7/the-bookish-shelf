import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import bookRoutes from './routes/bookRoutes.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const uploadsPath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'uploads');
app.use(cors()); app.use(express.json()); app.use('/uploads', express.static(uploadsPath));
app.get('/api/health', (_req, res) => res.json({ status: 'ok', database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' }));
app.use('/api/books', bookRoutes); app.use(errorHandler);
const port = process.env.PORT || 5000;
if (!process.env.MONGODB_URI) { console.error('MONGODB_URI is required.'); process.exit(1); }
mongoose.connect(process.env.MONGODB_URI).then(() => app.listen(port, () => console.log(`Server running on port ${port}`))).catch(err => { console.error('MongoDB connection failed:', err.message); process.exit(1); });
