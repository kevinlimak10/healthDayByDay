const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set content type to plain text
    res.setHeader('Content-Type', 'text/plain');

    // Routing
    if (req.url === '/') {
        // Handling GET request to '/'
        res.statusCode = 200;
        res.end('Hello, it\'s the health-day-by-day server');
    } else if (req.url === '/routine') {
        // Handling GET request to '/routine'
        res.statusCode = 200;
        res.end('Mocked routine');
    } else {
        // Handling unknown routes
        res.statusCode = 404;
        res.end('Not Found');
    }
});

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
