const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Admin Authentication Middleware
const authenticateAdmin = (req, res, next) => {
    const adminToken = req.headers['admin-token'];
    if (adminToken !== process.env.ADMIN_TOKEN) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
};

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Player Schema
const playerSchema = new mongoose.Schema({
    playerName: String,
    fromSchool: String,
    toSchool: String,
    position: String,
    playerClass: String,
    height: String,
    weight: String,
    image: String,
    recruitGrade: String,
    collegeGrade: String,
    commitType: String,
    twitter: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Player = mongoose.model('Player', playerSchema);

// Routes
app.get('/api/players', async (req, res) => {
    try {
        const players = await Player.find().sort({ createdAt: -1 });
        res.json(players);
    } catch (error) {
        console.error('Error fetching players:', error.message);
        res.status(500).json({ message: error.message });
    }
});

// Protected delete route
app.delete('/api/players/:id', authenticateAdmin, async (req, res) => {
    try {
        const playerId = req.params.id;
        const deletedPlayer = await Player.findByIdAndDelete(playerId);
        if (!deletedPlayer) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.status(200).json({ message: 'Player deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Protected post route
app.post('/api/players', authenticateAdmin, async (req, res) => {
    const player = new Player({
        playerName: req.body.playerName,
        fromSchool: req.body.fromSchool,
        toSchool: req.body.toSchool,
        position: req.body.position,
        playerClass: req.body.playerClass,
        height: req.body.height,
        weight: req.body.weight,
        image: req.body.image,
        recruitGrade: req.body.recruitGrade,
        collegeGrade: req.body.collegeGrade,
        commitType: req.body.commitType,
        twitter: req.body.twitter,
        description: req.body.description
    });
    
    try {
        const newPlayer = await player.save();
        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Serve static files
app.use(express.static('public'));

// Serve the index.html file for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});