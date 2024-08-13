const express = require("express");
const app = express();

const port = process.env.PORT || 3000;


const students = [
    {

        id: 1,
        name: "John",
        age: 20
    },
    {
        id: 2,
        name: "Jane",
        age: 21
    },
    {
        id: 3,
        name: "Joe",
        age: 22
    }

];

app.get("/", (req, res) => {    
    res.send('Node JS api');
});

app.get("/api/students/", (req, res) => {
    res.send(students);
});


app.get("/api/students/:id", (req, res) => {
    const student = students.find(s => s.id == parseInt(req.params.id));
    if (!student) {
        res.status(404).send("Student not found");
    }else{
        res.send(student);
    }
});




app.listen(port, () => {
  console.log(`port runing in http://localhost:${port}`);
});
