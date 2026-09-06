export default function errorHandler(err, _req, res, _next) {
  if (err instanceof SyntaxError) return res.status(400).json({ message: 'Invalid JSON.' });
  if (err.name === 'MulterError') return res.status(400).json({ message: err.code === 'LIMIT_FILE_SIZE' ? 'Image must be 5MB or smaller.' : err.message });
  if (err.message === 'Only image files are allowed.') return res.status(400).json({ message: err.message });
  if (err.name === 'ValidationError') return res.status(400).json({ message: 'Validation failed.', errors: Object.values(err.errors).map(e => e.message) });
  console.error(err); res.status(err.status || 500).json({ message: err.message || 'Server error.' });
}
