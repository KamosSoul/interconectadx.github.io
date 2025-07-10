const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images, videos, PDFs)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'INTERCONECTADX',
        pageTitle: 'INTERCONECTADX'
    });
});

app.get('/texto', (req, res) => {
    res.render('texto', { 
        title: 'Archivos de texto',
        pageTitle: 'Archivos de texto'
    });
});

app.get('/audio', (req, res) => {
    res.render('audio', { 
        title: 'Archivos de audio',
        pageTitle: 'Archivos de audio'
    });
});

app.get('/imagenes', (req, res) => {
    res.render('imagenes', { 
        title: 'Archivos de imagen',
        pageTitle: 'Archivos de imagen'
    });
});

app.get('/video', (req, res) => {
    res.render('video', { 
        title: 'Archivos de video',
        pageTitle: 'Archivos de video'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});