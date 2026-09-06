import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  description: { type: String, default: '' }, genre: { type: String, default: '' },
  coverImage: { type: String, default: '' },
  status: { type: String, enum: ['Want to Read', 'Currently Reading', 'Finished'], default: 'Want to Read' },
  currentPage: { type: Number, default: 0, min: 0 },
  totalPages: { type: Number, required: true, min: 1 },
  rating: { type: Number, min: 1, max: 5 }, review: { type: String, default: '' },
  startedAt: { type: Date }, finishedAt: { type: Date }
}, { timestamps: true });

bookSchema.pre('validate', function () {
  if (this.currentPage > this.totalPages) this.invalidate('currentPage', 'Current page cannot exceed total pages.');
});
export default mongoose.model('Book', bookSchema);
