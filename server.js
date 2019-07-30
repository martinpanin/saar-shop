const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const PORT = 3000;
app
    .prepare()
    .then(() => {
        const server = express()
        server.get('/category/itemlist/:slug', (req, res) => {
            return app.render(req, res, '/itemlist', { slug: req.params.slug })
        })
        server.get('/category/product/:slug', (req, res) => {
            return app.render(req, res, '/products', { slug: req.params.slug })
        })
        server.get('/category/', (req, res) => {
            return app.render(req, res, '/category', { slug: req.params.slug })
        })
        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(PORT,  err => {
            if (err) throw err
            console.log('> Ready on port http://localhost:' + PORT );
        })
    })
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
    })
