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
    res.render('show-contact',{contact:SingleContact})
})


app.get('/add-contact',(req,res) => {res.render('add-contact')})


app.post('/add-contact',async (req,res) => {
    const newContact = await contact.create(req.body)
    res.redirect('/')
})


//  CORRECTED ROUTE STRUCTURE:
app.get('/update-contact/:id', async (req, res) => {
    const foundContact = await contact.findById(req.params.id);
    res.render('update-contact', { contact: foundContact })

    });

app.post('/update-contact/:id',async (req,res) => {
    const {first_name, last_name, email, phone,address} = req.body
    await contact.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/")
})

app.get('/delete-contact/:id',async (req,res) =>  {
    await contact.findByIdAndDelete(req.params.id)
    res.redirect("/")
})

app.listen(45, () => {
    console.log('Server is running on port 45')
})