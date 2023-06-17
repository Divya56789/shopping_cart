const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());

document.cookie = "e-commerce=shopcart; SameSite=Strict";


require('dotenv').config()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
const port = process.env.PORT
const Stripe = require('stripe')(process.env.STRIPE__SECRET__KEY)

app.get('/',(req,res) => {
    res.send("hello world")
})

app.post('/pay', async (req, res) => {
    console.log(req.body.token);
    await Stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency : "usd",
    })
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})