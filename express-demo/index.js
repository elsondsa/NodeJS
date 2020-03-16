const express = require('express')
const app = express()
const Joi = require('joi')
app.use(express.json())

const courses = [
    {
        id:1,
        name:'Elson',
        email:'elsondsa98@gmail.com'
    },
    {
        id:2,
        name:'Ganesh Naidu',
        email:'narpugana@gmail.com'
    },
    {
        id:3,
        name:'H S Sunag Hemmanna',
        email:'hhemmanna@gmail.com'
    },
    {
        id:4,
        name:'Praveen Kumar',
        email: 'praveen@gmail.com'
    },
    {
        id:5,
        name:'Harsh Kumar',
        email:'harshkumar@gmail.com'
    }
];


app.get('/',(req,res) => {
    res.send('Hello World');
});

app.get('/api/courses',(req,res) => {
    res.send(courses);
});

app.get('/api/courses/:id',(req,res) => {
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with given id is not found');
    res.send(course);
});

app.post('/api/courses', (req,res) => {

    const schema = {
        name: Joi.string().min(3).required(),
        email: Joi.string().min(8).required()
    }

    const result = Joi.validate(req.body, schema);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    courses.push(course);
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required(),
        email: Joi.string().min(8).required()
    }
    return Joi.validate(course, schema);
}

app.put('/api/courses/:id',(req,res) => {
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) {
        
    const cour = {
        id: courses.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    courses.push(cour);
    res.send(cour);
    return;
    }
    const { error } = validateCourse(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
    }
    course.name = req.body.name;
    course.email = req.body.email;
    res.send(course)
});

app.delete('/api/courses/:id', (req,res) => { 
     const course = courses.find(c=> c.id === parseInt(req.params.id));
     if(!course) res.status(404).send('The course with given id is not found');
     const index = courses.indexOf(course);
     courses.splice(index,1);
     res.send(course);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening to port ${port}`));