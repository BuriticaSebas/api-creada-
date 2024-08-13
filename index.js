const express = require("express");
const app = express();

const port = process.env.PORT || 3000;


const students = [
    {
        personajesDoblados:{
        rickI: "Justin Roiland",
        mortyI: "Justin Roiland",
        rickE: "Juan Guzman",
        mortyE: "Eder la Barrera",
        },

        temporadas: {
            1: "2015",
            2: "2015",
            3: "2016",
            4: "2016",
            5: "2017",
            6: "2017",
            7: "2018",
            8: "2018",
            9: "2019",
            10: "2019",
        },
    
    },
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



