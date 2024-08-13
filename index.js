const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());


const sebastian = {
    personajesDoblados: {
        rickI: "Justin Roiland",
        mortyI: "Justin Roiland",
        rickE: "Juan Guzman",
        mortyE: "Eder la Barrera",
        img: "https://wallpapers.com/images/featured/rick-and-morty-8rc57d4ds44gqzau.jpg"
    },
    temporadas: {
        1: { 
            episodios: 11,
            primeraE: "December 2, 2013",
            ultimaE: "April 14, 2014",
        },
        2: {
            episodios: 10,
            primeraE: "July 26, 2015",
            ultimaE: "April 1, 2017",
        },
        3: {
            episodios: 10,
            primeraE: "April 1, 2017",
            ultimaE: "October 1, 2017",
        },
        4: {
            episodios: 10,
            primeraE: "November 10, 2019",
            ultimaE: "October 31, 2020",
        },
        5: {
            episodios: 10,
            primeraE: "June 20, 2021",
            ultimaE: "September 5, 2021",
        },
        6: {
            episodios: 10,
            primeraE: "September 4, 2022",
            ultimaE: "December 11, 2022",
        },
        7: {
            episodios: 10,
            primeraE: "October 15, 2023",
            ultimaE: "December 17, 2023",
        }
    }
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


