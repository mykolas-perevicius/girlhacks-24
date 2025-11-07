# Melody Matcher 🎵

A fun and interactive music puzzle game where you listen to song snippets and group them together to find the right song! Built for GirlHacks 2024.

## 🎮 Play Now

**[Play Melody Matcher Live!](#)** _(Link will be updated after deployment)_

## 🎯 How to Play

1. **Listen** - Hover over tiles to hear different music snippets
2. **Select** - Click on tiles to select them (you can select multiple)
3. **Group** - Click "Group" to combine your selected tiles into a color-coded group
4. **Submit** - Once you've grouped what you think is the right song, click "Submit"
5. **Win** - If you group all the correct snippets together, you win and hear the full song!

### Controls

- **Play** - Play all tile sounds at once
- **Stop** - Stop all currently playing sounds
- **Group** - Group your selected tiles together
- **Submit** - Submit your guess to see if you found the right song
- **Refresh** - Start a new game with a different song

### Rules

- You have 3 attempts to find the correct song
- The game will highlight correct tiles in light green after each incorrect attempt
- After 3 attempts, the correct tiles will be revealed

## 🚀 Features

- Interactive tile-based gameplay with visual and audio feedback
- Multiple classic disco/pop songs to guess
- Color-coded grouping system
- Attempt tracking
- Responsive design that works on different screen sizes
- Built with Paper.js for smooth canvas animations
- Howler.js for robust audio playback

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **Vite** - Build tool and dev server
- **Chakra UI** - Component library
- **Paper.js** - Canvas graphics and animations
- **Howler.js** - Audio playback
- **React Router** - Navigation

### Backend (Optional)
- **Express** - Server framework
- **MongoDB** - Database for user accounts
- **Mongoose** - MongoDB ODM

## 📦 Installation

### Frontend Only (Recommended for playing the game)

```bash
# Clone the repository
git clone https://github.com/mykolas-perevicius/girlhacks-24.git
cd girlhacks-24/frontend

# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

### Full Stack (if you want user authentication)

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../
npm install

# Create a .env file in the root directory
echo "MONGO_URI=your_mongodb_connection_string" > .env

# Run backend (in one terminal)
npm run dev

# Run frontend (in another terminal)
cd frontend
npm run dev
```

## 🎵 Adding New Songs

To add new songs to the game:

1. Create a folder in `frontend/public/sounds/` with your song name (e.g., `my_song`)
2. Add audio snippets to that folder
3. Optionally add a `full.mp3` file for the complete song
4. Update `frontend/public/songs.js`:

```javascript
{
    "name": "my_song",
    "displayName": "My Song Title",
    "parts": [
        "my_song/snippet1.mp3",
        "my_song/snippet2.mp3",
        "my_song/snippet3.mp3"
    ]
}
```

## 📁 Project Structure

```
girlhacks-24/
├── frontend/
│   ├── public/
│   │   ├── sounds/           # Audio files
│   │   ├── songs.js          # Song configuration
│   │   └── script.js         # Main game logic
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx      # Game page
│   │   │   ├── Login.jsx     # Login page
│   │   │   └── Signup.jsx    # Signup page
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
└── README.md
```

## 🎨 Game Mechanics

The game randomly selects one target song and scatters its snippets among snippets from other songs across an 18-tile grid (3 rows × 6 columns). Your goal is to identify and group together all the snippets that belong to the target song.

- **Target song snippets** are mixed with other song snippets as distractors
- Each game randomly selects a different song to find
- Visual feedback helps you track your progress
- Audio preview on hover helps you make decisions

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Add new songs (with proper licensing)
- Improve the UI/UX
- Optimize performance

## 📝 License

This project was created for GirlHacks 2024. Feel free to use and modify for educational purposes.

## 🙏 Acknowledgments

- Built for GirlHacks 2024
- Audio library: Howler.js
- Graphics: Paper.js
- UI Components: Chakra UI

## 📧 Contact

For questions or feedback about this project, please open an issue on GitHub.

---

**Made with ❤️ for GirlHacks 2024**
