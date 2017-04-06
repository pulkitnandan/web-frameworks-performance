const express = require('express')
const next = require('next')
const {parse} = require('url')
var https = require('https');

function getCategoryResults(searchText, page, pageSize) {
    return `marketplacewebservices/v2/mpl/products/serpsearch?type=category&typeID=${searchText}&searchText=:relevance:category:${searchText}&page=${page}&channel=mobile&pageSize=${pageSize}&isFilter=false&isTextSearch=false`
}

const pathMatch = require('path-match')

const route = pathMatch()

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    server.get('/a', function(req, res) {
        const fs = require('fs')
        fs.readFile('/home/rohitn/index', 'utf8', function(err, data) {
            if (err) {
                return console.log(err);
            }

            res.json(data)
        });

    });

    server.get('*', (req, res) => {
        handle(req, res)
    })



    server.listen(3000, (err) => {
        if (err)
            throw err
        console.log('> Ready on http://localhost:3000')
    })

})
