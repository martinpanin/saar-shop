const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const HOST = "localhost";
const PORT = 3000;
app
    .prepare()
    .then(() => {
        const server = express()

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(PORT,HOST,  err => {
            if (err) throw err
            console.log('> Ready on http://' + HOST + ':' + PORT + '/' );
        })
    })
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
    })
