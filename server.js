const http = require('http');

http.createServer((req, res) => {
    res.end(`
        <html>
            <head>
                <meta charset='utf-8'>
            </head>
            <body>
                <h1>Casa do Código</h1>
            </body>
        </html>
    `);
}).listen(3000);