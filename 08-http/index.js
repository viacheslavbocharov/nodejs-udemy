const http = require('http');
const {
    getHTML,
    getText,
    getComments,
    handleNotFoundPage,
    postComments,
    getHome,
} = require('./handlers.js');

const PORT = 5000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        return getHome(req, res);
    }

    if (req.method === 'GET' && req.url === '/html') {
        return getHTML(req, res);
    }
    if (req.method === 'GET' && req.url === '/text') {
        return getText(req, res);
    }

    if (req.method === 'GET' && req.url === '/comments') {
        return getComments(req, res);
    }

    if (req.method === 'POST' && req.url === '/comments') {
        return postComments(req, res);
    }

    handleNotFoundPage(req, res);
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
