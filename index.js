const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

const sebastian = {
    personajesDoblados: {
        rick: {
            ingles: "Justin Roiland",
            espanol: "Juan Guzman"
        },
        morty: {
            ingles: "Justin Roiland",
            espanol: "Eder la Barrera"
        },
        imagen: "https://wallpapers.com/images/featured/rick-and-morty-8rc57d4ds44gqzau.jpg"
    },
    temporadas: [
        {
            numero: 1,
            episodios: 11,
            primeraEmision: "December 2, 2013",
            ultimaEmision: "April 14, 2014"
        },
        {
            numero: 2,
            episodios: 10,
            primeraEmision: "July 26, 2015",
            ultimaEmision: "April 1, 2017"
        },
        {
            numero: 3,
            episodios: 10,
            primeraEmision: "April 1, 2017",
            ultimaEmision: "October 1, 2017"
        },
        {
            numero: 4,
            episodios: 10,
            primeraEmision: "November 10, 2019",
            ultimaEmision: "October 31, 2020"
        },
        {
            numero: 5,
            episodios: 10,
            primeraEmision: "June 20, 2021",
            ultimaEmision: "September 5, 2021"
        },
        {
            numero: 6,
            episodios: 10,
            primeraEmision: "September 4, 2022",
            ultimaEmision: "December 11, 2022"
        },
        {
            numero: 7,
            episodios: 10,
            primeraEmision: "October 15, 2023",
            ultimaEmision: "December 17, 2023"
        }
    ]
};


app.get("/", (req, res) => {    
    res.send('Node JS api');
});

app.get("/api/sebastian/", (req, res) => {
    res.send(sebastian);
});


app.listen(port, () => {
  console.log(`port running on http://localhost:${port}`);
});


