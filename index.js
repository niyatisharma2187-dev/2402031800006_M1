const express = require("express")
const app = express()
const mongoose = require("mongoose")
const contact = require("./models/contacts.models")

//Database connection
mongoose.connect('mongodb://127.0.0.1:27017/contact-crud')
.then(() => console.log("DataBase connected."))


//middleware
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
//routes
app.get('/',async(req,res) => {
    const contacts= await contact.find()
    // res.json(contacts)
    res.render('home',{contacts})

})

app.get('/show-contact/:id',async (req,res) => {
    const SingleContact = await contact.findById(req.params.id);
    res.json(SingleContact);
   
    // res.render('show-contact',{contact})
})


app.get('/add-contact',(req,res) => {res.render('add-contact')})


app.post('/add-contact',(req,res) => {})


app.get('/update-contact/:id',(req,res) => {res.render('update-contact')})
app.post('/update-contact/:id',(req,res) => {})
app.get('/delete-contact/:id',(req,res) => {})



app.listen(450, () => {
    console.log('Server is running on port 450')
})