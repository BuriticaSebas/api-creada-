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

    },
    temporadas: [
        {
            acordeon:"One",
            numero: 1,
            episodios: 11,
            primeraEmision: "December 2, 2013",
            ultimaEmision: "April 14, 2014"
        },
        {
            numero: 2,
            episodios: 10,
            primeraEmision: "July 26, 2015",
            ultimaEmision: "April 1, 2017",
            acordeon:"Two",
        },
        {
            numero: 3,
            episodios: 10,
            primeraEmision: "April 1, 2017",
            ultimaEmision: "October 1, 2017",
            acordeon:"Three"
        },
        {
            numero: 4,
            episodios: 10,
            primeraEmision: "November 10, 2019",
            ultimaEmision: "October 31, 2020",
            acordeon:"Four"
        },
        {
            numero: 5,
            episodios: 10,
            primeraEmision: "June 20, 2021",
            ultimaEmision: "September 5, 2021",
            acordeon:"Five"
        },
        {
            numero: 6,
            episodios: 10,
            primeraEmision: "September 4, 2022",
            ultimaEmision: "December 11, 2022",
            acordeon:"Six"
        },
        {
            numero: 7,
            episodios: 10,
            primeraEmision: "October 15, 2023",
            ultimaEmision: "December 17, 2023",
            acordeon:"Seven"
        }
    ],
    premios: [
      {
          año: 2015,
          premiacion: "BTVA Voice Acting Awards",
          categoria: "Best Male Lead Vocal Performance in a Television Series - Comedy/Musical",
          nominado: "Justin Roiland",
          resultado: "Ganador",
          temporada: 1
      },
      {
          año: 2015,
          premiacion: "IGN Awards",
          categoria: "Best Animated Series",
          nominado: "Rick and Morty",
          resultado: "Ganador",
          referencia: 9,
          temporada: 2
      },
      {
          año: 2015,
          premiacion: "IGN People's Choice Award",
          categoria: "Best Animated Series",
          nominado: "Rick and Morty",
          resultado: "Ganador",
          referencia: 9,
          temporada: 2
      },
      {
          año: 2017,
          premiacion: "IGN Awards",
          categoria: "Best Animated Series",
          nominado: "Rick and Morty",
          resultado: "Ganador",
          referencia: 15,
          temporada: 3
      },
      {
          año: 2017,
          premiacion: "IGN Awards",
          categoria: "Best Comedic TV Performance",
          nominado: "Justin Roiland",
          resultado: "Ganador",
          referencia: 17,
          temporada: 3
      },
      {
          año: 2017,
          premiacion: "IGN People's Choice Award",
          categoria: "TV Series of the Year",
          nominado: "Rick and Morty",
          resultado: "Ganador",
          referencia: 13,
          temporada: 3
      },
      {
          año: 2017,
          premiacion: "IGN People's Choice Award",
          categoria: "Best Animated Series",
          nominado: "Rick and Morty",
          resultado: "Ganador",
          referencia: 15,
          temporada: 3
      },
      {
          año: 2017,
          premiacion: "IGN People's Choice Award",
          categoria: "Best Comedic TV Performance",
          nominado: "Justin Roiland",
          resultado: "Ganador",
          referencia: 17,
          temporada: 3
      },
      {
          año: 2018,
          premiacion: "Critics' Choice Television Awards",
          categoria: "Best Animated Series",
          nominado: "Rick and Morty",
          resultado: "Ganador",
          referencia: 18,
          temporada: 3
      },
      {
          año: 2018,
          premiacion: "Annie Awards",
          categoria: "Best General Audience Animated Television/Broadcast Production",
          nominado: "Pickle Rick",
          resultado: "Ganador",
          referencia: 19,
          temporada: 3
      },
      {
          año: 2018,
          premiacion: "Annie Awards",
          categoria: "Outstanding Achievement for Writing in an Animated Television/Broadcast Production",
          nominado: "Ryan Ridley, Dan Guterman (for \"The Ricklantis Mixup\")",
          resultado: "Ganador",
          referencia: 19,
          temporada: 3
      }
  ]
  
        
      }
      


app.get("/", (req, res) => {    
    res.send('Node JS api');
});

app.get("/api/sebastian/", (req, res) => {
    res.send(sebastian);
});


app.listen(port, () => {
  console.log(`port running on http://localhost:${port}`);
});


