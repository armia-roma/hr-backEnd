const express = require('express');
var cors = require('cors');


const department = require('./controllers/department')
const section = require('./controllers/section')
const state = require('./controllers/state')

const app = express();

app.use(express.json())
app.use(cors())

//Department
app.post('/department', department.create)
// app.get('/department', department.search)
app.get('/department', department.getAll)
app.get('/department/:id', department.findOne)
app.put('/department/:id', department.update)

//Section
app.post('/section', section.create)
app.get('/section', section.getAll)
// app.get('/section/:id', section.getById)

//state
app.post('/state', state.create)

app.listen(9191 , (err) => {

    if(err) console.log(err) 
    console.log("app runing in 8080")
})