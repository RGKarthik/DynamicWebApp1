# Indian Knowledge Quiz Website 🧠🇮🇳

A comprehensive quiz website featuring Indian-centric questions across multiple topics with four difficulty levels.

## Features

### 📚 Topics Covered
- **Sports** - Cricket, hockey, Olympics, and Indian sports personalities
- **Politics** - Indian Constitution, governance, and political history
- **International Affairs** - Global events, organizations, and diplomacy
- **Bollywood** - Hindi cinema, actors, directors, and film history
- **Hindu Mythology** - Epics, deities, and religious texts
- **Indian History** - Ancient to modern Indian history
- **World History** - Global historical events and civilizations
- **Science** - Physics, chemistry, biology, and general science
- **Mathematics** - Algebra, geometry, calculus, and mathematical concepts
- **Economics** - Economic principles, Indian economy, and financial concepts
- **Business** - Entrepreneurship, companies, and business principles

### 🎯 Difficulty Levels
- **Level 1** (🟢): 10 points - Basic knowledge questions
- **Level 2** (🟡): 20 points - Intermediate difficulty
- **Level 3** (🟠): 30 points - Advanced knowledge required
- **Level 4** (🔴): 40 points - Expert level questions

### 🎮 Quiz Format
- Select **2 topics** from 11 available options
- Answer **8 questions total** (4 per topic, 1 from each difficulty level)
- Maximum possible score: **200 points**
- Text-based answers with intelligent matching
- Real-time score tracking
- Detailed results breakdown

### 🌟 Key Features
- **Responsive design** - Works on desktop, tablet, and mobile
- **Indian context** - All questions designed for Indian audience
- **Smart answer matching** - Flexible answer validation
- **Progress tracking** - Visual progress indicators
- **Score breakdown** - Performance analysis by topic and difficulty
- **Results modal** - Comprehensive quiz completion summary

## Files Structure

```
DynamicWebApp1/
├── index.html          # Landing page with topic selection
├── quiz.html           # Quiz interface
├── styles.css          # Complete styling for all pages
├── script.js           # Landing page functionality
├── quiz.js             # Quiz logic and answer processing
├── questions.json      # Question database (220 questions)
└── README.md           # Project documentation
```

## How to Use

### Local Development
1. **Start**: Open `index.html` in a web browser
2. **Setup**: Enter your name and select exactly 2 topics
3. **Quiz**: Answer 8 questions (4 per topic, mixed difficulty)
4. **Results**: View your score and detailed breakdown

### Production Deployment
1. **Install Dependencies**: `npm install`
2. **Start Server**: `npm start`
3. **Access**: Visit `http://localhost:3000`
4. **Azure Deploy**: See [AZURE_DEPLOYMENT.md](AZURE_DEPLOYMENT.md) for cloud deployment

## Question Database

- **20 questions per topic** (11 topics = 220 total questions)
- **5 questions per difficulty level** for each topic
- **Indian perspective** - Questions assume Indian cultural context
- **Varied formats** - Names, dates, concepts, calculations
- **Accurate answers** - Thoroughly researched and verified

## Technical Details

### Technologies Used
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js with Express.js server
- **Security**: Helmet.js, Content Security Policy, Compression
- **Deployment**: Azure App Service with GitHub Actions CI/CD
- **Data Storage**: JSON files, SessionStorage for client state
- **Performance**: Static file caching, compression, CDN ready

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- **Lazy loading** - Questions loaded on demand
- **Optimized animations** - Smooth transitions and effects
- **Responsive images** - Scalable UI elements
- **Efficient DOM manipulation** - Minimal reflows and repaints

## Customization

### Adding Questions
Edit `questions.json` to add more questions:
```json
{
  "TopicName": {
    "level1": [
      {"question": "Question text?", "answer": "Answer", "points": 10}
    ]
  }
}
```

### Modifying Difficulty
Update point values in both `questions.json` and the display logic in `quiz.js`.

### Styling Changes
Modify `styles.css` for visual customizations. Key variables:
- Primary color: `#667eea`
- Secondary color: `#764ba2`
- Success color: `#4CAF50`
- Warning color: `#FF9800`

## Future Enhancements

- **Timer functionality** - Add time limits per question
- **Leaderboard** - Track high scores across sessions
- **Hints system** - Provide clues for difficult questions
- **Audio feedback** - Sound effects for correct/incorrect answers
- **Social sharing** - Share results on social media
- **Admin panel** - Add/edit questions through UI
- **Multiple languages** - Support for regional Indian languages

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add questions or improvements
4. Test thoroughly
5. Submit a pull request

---

Made with ❤️ for the Indian quiz enthusiasts!
Quiz creator
