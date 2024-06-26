const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const axios = require('axios')

app.use(express.json())

app.get('/api/news', async (req, res) => {
    try{
        const data = await axios.get('https://newsapi.org/v2/everything?q=ai&apiKey=9b4ee910750244848b607efe8d2c7653')
        // console.log(data);
        res.json(data.data.articles)
    } catch (err) {
        res.json({
            status: "error",
            message: err.message,
        })
    }
})

app.listen(3030, () => {
    console.log("server start on port 3030...");
})