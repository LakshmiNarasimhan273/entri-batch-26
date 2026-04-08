const express = require("express");
const app = express();

const port = 8080;

// GET, POST, PUT, DELETE

// http://localhost:8080/courses
app.get('/courses', (req, res) => {
    // api logic -> to retrive all data from db
    res.json({message: "All Courses are displayed"});
});

// http://localhost:8080/courses/new
app.post('/courses/new', (req, res) => {
    // api logic -> create a new record in db
    res.json({message: "Course Added"});
});

// http://localhost:8080/courses/edit/3
app.put('/courses/edit/:id', (req, res) => {
    // api logic -> edit an existing record based on that id
    res.json({message: "Course Updated"});
});

// http://localhost:8080/courses/delete/3
app.delete('/courses/delete/:id', (req, res) =>{
    // api logic -> delete an existing record based on that id
    res.json({message: "Course Deleted"});
});

app.listen(port, () => {
    console.log(`Server up and running on ${port}`);
});
// http://localhost:8080