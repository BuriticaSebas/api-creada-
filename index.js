const express = require("express");
const app = express();

app.use(express.json());


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


app.post("/api/students", (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        enroll: (req.body.enroll === true)
    };
    students.push(student);
    res.send(student);
});


app.delete("/api/students/:id", (req, res) => {
    const student = students.find(s => s.id == parseInt(req.params.id));
    if (!student) {
        res.status(404).send("Student not found");
    }else{
        const index = students.indexOf(student);
        students.splice(index, 1);
        res.send(student);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
