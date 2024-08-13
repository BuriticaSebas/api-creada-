const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());


const students = [
    {
        personajesDoblados:{
        rickI: "Justin Roiland",
        mortyI: "Justin Roiland",
        rickE: "Juan Guzman",
        mortyE: "Eder la Barrera",
        },

        temporadas: {
            1:{ 
                episodios:11,
                primeraE:"2 de Diciembre de 2013",
                ultimaE:"14 de Abri de 2014",
            },

            2: {
                episodios:10,
                primeraE:"26 de julio de 2015",
                ultimaE:"1 de Abri de 2017",},

            3: {
                episodios:10,
                primeraE:"1 de Abril de 2017",
                ultimaE:"1 de octubre de 2017",
            },

            4: {
                episodios:10,
                primeraE:"10 de Noviembre de 2019",
                ultimaE:"31 de octubre de 2020",
            },

            5: {
                episodios:10,
                primeraE:"20 de Junio de 2021",
                ultimaE:"5 de septiembre de 2021",
            },

            6: {
                episodios:10,
                primeraE:"4 de Septiembre de 2022",
                ultimaE:"11 de Diciembre de 2022",
            },

            7: {
                episodios:10,
                primeraE:"15 de Octubre de 2023",
                ultimaE:"17 de Diciembre de 2023",
            }

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



