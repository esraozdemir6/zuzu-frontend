const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Enable CORS for all requests
app.use(cors());

// Serve static HTML files
app.use(express.static(path.join(__dirname, 'src/frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/frontend', 'signin.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
