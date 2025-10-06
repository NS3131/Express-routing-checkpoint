const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Custom middleware to check working hours (Monday to Friday, 9 to 17)
const workingHoursMiddleware = (req, res, next) => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = now.getHours();
    
    // Check if it's a weekday (Monday = 1 to Friday = 5) and between 9 AM and 5 PM
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
        next(); // Continue to the next middleware/route
    } else {
        res.status(503).send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Service Unavailable</title>
                <link rel="stylesheet" href="/css/style.css">
            </head>
            <body>
                <div class="container">
                    <h1>Service Unavailable</h1>
                    <p>Our website is only available during working hours:</p>
                    <p><strong>Monday to Friday, 9:00 AM to 5:00 PM</strong></p>
                    <p>Please come back during our business hours.</p>
                    <div class="current-time">
                        <p>Current time: ${now.toLocaleString()}</p>
                    </div>
                </div>
            </body>
            </html>
        `);
    }
};

// Apply the working hours middleware to all routes
app.use(workingHoursMiddleware);

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'services.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Available during working hours: Monday to Friday, 9:00 AM to 5:00 PM');
});

