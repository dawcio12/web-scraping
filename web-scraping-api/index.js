const axios = require("axios");
const express = require("express");
const cheerio = require("cheerio");
const cors = require('cors')
const api = express();
const port = 9000;
const articles = [];
const years = [];

api.use(cors());

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
console.log(years);


api.get('/years', (req, res) => {
    res.json({ years })
})

api.get('/articles/:year', async (req, res) => {
    const articleFromYear = articles.filter(p => p.date.includes(req.params.year))
    res.json({ articleFromYear })
})

api.get('/allArticles', (req, res) => {
    const length = articles.length
    res.json({ articles, length })
})

api.get('/article/:title', async (req, res) => {
    const art = articles.filter(p => p.title.includes(req.params.title))[0]
    let result = {}
    axios.get(art.href).then((response) => {
        const html = response.data
        const $ = cheerio.load(html);
        $('div.post', html).each(function () {
            const title = $(".post-title", this).text()
            const text = $(".entrytext", this).html()
            const comments = $("ol.commentlist", this).html()
            result = Object.assign({}, { title, text, comments })

        })
        res.json({ result })
    })

})

api.listen(port, () => console.log(`server is listening on port : ${port}`))