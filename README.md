# The Bookish Shelf

The Bookish Shelf is a privacy-focused personal reading tracker for readers who want a calm, distraction-free place to organize their library, follow reading progress, and remember what each book meant to them.

## Why this project?

Many reading platforms focus on social feeds, followers, and recommendations. The Bookish Shelf keeps the experience personal: your books, your notes, your pace. It is designed as a simple portfolio project with a practical full-stack architecture.

## Features

- Add, edit, and delete books
- Upload book covers with Multer and optional Cloudinary storage
- Track Want to Read, Currently Reading, and Finished books
- Update reading progress with automatic completion status
- Add ratings and reviews
- Search by title or author
- Filter by status and genre
- Sort by recent, title, rating, or reading progress
- Dashboard statistics and reading overview chart
- Reading Room page with reading reflections and quotes
- Responsive cozy-library interface for desktop and mobile

## Screenshots

Add screenshots to `screenshots/` when ready:

```text
screenshots/dashboard.png
screenshots/my-books.png
screenshots/book-details.png
screenshots/reading-room.png
```

Then reference them here with Markdown image links.

## Tech stack

- React and Vite
- JavaScript, HTML, and plain CSS
- React Router
- Node.js and Express
- MongoDB and Mongoose
- Multer for local uploads
- Optional Cloudinary image hosting

## Project structure

```text
client/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── styles.css
│   ├── App.jsx
│   └── main.jsx
└── package.json

server/
├── controllers/
├── middleware/
├── models/
├── routes/
├── uploads/
├── server.js
└── package.json
```

## Run locally

Prerequisites: Node.js, npm, and MongoDB.

```powershell
cd server
npm install
```

Create `server/.env` from `.env.example`:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/book-tracker
```

Optional Cloudinary configuration:

```env
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Start the backend:

```powershell
cd server
npm.cmd start
```

Start the frontend in a second terminal:

```powershell
cd client
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:5173`.

## API endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Check server and database status |
| GET | `/api/books` | List books with search, filters, and sorting |
| GET | `/api/books/:id` | Get one book |
| POST | `/api/books` | Create a book |
| PUT | `/api/books/:id` | Update a book |
| PATCH | `/api/books/:id/progress` | Update reading progress |
| DELETE | `/api/books/:id` | Delete a book |
| GET | `/api/books/stats` | Get reading statistics |

## Privacy and security

The application has no authentication or public social feed. It is intended for personal use. Environment files and uploaded assets are excluded from Git with `.gitignore`; never commit API secrets.

## Known limitations

- No authentication or multi-user accounts
- Local MongoDB is expected during development
- Local image storage remains the fallback when Cloudinary is not configured
- No automated browser test suite yet

## Future improvements

- Reading goals and streaks
- Favorites and custom shelves
- More detailed reading analytics
- Automated API tests
- Production deployment with MongoDB Atlas and Cloudinary

## License

This project is available for self learnig.
s