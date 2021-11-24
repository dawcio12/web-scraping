const axios = require("axios");
const express = require("express");
const cheerio = require("cheerio");
const cors = require('cors')
const api = express();
const port = 9000;
const articles = [];
const years = [];

api.use(cors());

api.listen(port, () => console.log(`server is listening on port : ${port}`))

axios.get('https://wordpress.com/blog/2021/').then((response) => {
    const html = response.data
    const $ = cheerio.load(html);
    $('ul.year-nav li', html).each(function () {
        const year = $("a", this).text()
        axios.get(`https://wordpress.com/blog/${year}/`).then((response) => {
            const html = response.data 
            const $ = cheerio.load(html);
            $('a.post-link', html).each(function () {
                const title = $("strong", this).text()
                const date = $("span", this).text()
                const href = $(this).attr("href")
                articles.push({ title, href, date })
            })
        })
        years.push(year)
    })
})

api.get('/years', (req, res) => {
    res.json({ years })
})

api.get('/articles/:year', (req, res) => {
    const articleFromYear = articles.filter(p => p.date.includes(req.params.year))
    res.json({ articleFromYear })
})

api.get('/allArticles', (req, res) => {
    const length = articles.length
    res.json({ articles, length })
})

api.get('/article/:title', (req, res) => {
    const art = articles.filter(p => p.title.toLowerCase().includes(decodeURI(req.params.title)))[0]
    let post = {}
    axios.get(art.href).then((response) => {
        const html = response.data
        const $ = cheerio.load(html);
        $('div.post', html).each(function () {
            const title = $(".post-title", this).text()
            const text = $(".entrytext", this).html()
            const comments = $("ol.commentlist", this).html()
            post = { title, text, comments }
        })
        res.json({ post })
    })
})

