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
    ],
        "premios": [
          {
            "año": 2014,
            "premiacion": "BTVA Voice Acting Awards",
            "categoria": "Best Male Vocal Performance in a Television Series in a Supporting Role - Comedy/Musical",
            "nominado": "Chris Parnell",
            "resultado": "Nom",
            "referencia": 5,
            "temporada": 1
          },
          {
            "año": 2014,
            "premiacion": "BTVA Voice Acting Awards",
            "categoria": "Best Female Vocal Performance in a Television Series in a Supporting Role - Comedy/Musical",
            "nominado": "Sarah Chalke",
            "resultado": "Nom",
            "referencia": 5,
            "temporada": 1
          },
          {
            "año": 2014,
            "premiacion": "IGN Awards",
            "categoria": "Best TV Animated Series",
            "nominado": "Rick and Morty",
            "resultado": "Nom",
            "referencia": 6,
            "temporada": 1
          },
          {
            "año": 2014,
            "premiacion": "IGN People's Choice Award",
            "categoria": "Best TV Animated Series",
            "nominado": "Rick and Morty",
            "resultado": "Nom",
            "referencia": 6,
            "temporada": 1
          },
          {
            "año": 2015,
            "premiacion": "BTVA Voice Acting Awards",
            "categoria": "Best Male Lead Vocal Performance in a Television Series - Comedy/Musical",
            "nominado": "Justin Roiland",
            "resultado": "Ganador",
            "referencia": 7,
            "temporada": 1
          },
          {
            "año": 2015,
            "premiacion": "Annie Awards",
            "categoria": "Best General Audience Animated TV/Broadcast Production",
            "nominado": "Rick and Morty",
            "resultado": "Nom",
            "referencia": 8,
            "temporada": 1
          },
          {
            "año": 2015,
            "premiacion": "IGN Awards",
            "categoria": "Best Animated Series",
            "nominado": "Rick and Morty",
            "resultado": "Ganador",
            "referencia": 9,
            "temporada": 2
          },
          {
            "año": 2015,
            "premiacion": "IGN People's Choice Award",
            "categoria": "Best Animated Series",
            "nominado": "Rick and Morty",
            "resultado": "Ganador",
            "referencia": 9,
            "temporada": 2
          },
          {
            "año": 2016,
            "premiacion": "BTVA Voice Acting Awards",
            "categoria": "Best Male Lead Vocal Performance in a Television Series",
            "nominado": "Justin Roiland",
            "resultado": "Nom",
            "referencia": 10,
            "temporada": 2
          },
          {
            "año": 2016,
            "premiacion": "BTVA Voice Acting Awards",
            "categoria": "Best Vocal Ensemble in a Television Series",
            "nominado": "Rick and Morty",
            "resultado": "Nom",
            "referencia": 10,
            "temporada": 2
          },
          {
            "año": 2016,
            "premiacion": "Gold Derby Awards",
            "categoria": "Best Animated Series",
            "nominado": "Rick and Morty",
            "resultado": "Nom",
            "referencia": 11,
            "temporada": 2
          },
          {
            "año": 2017,
            "premiacion": "Teen Choice Awards",
            "categoria": "Choice Animated TV Show",
            "nominado": "Rick and Morty",
            "resultado": "Nom",
            "referencia": 12,
            "temporada": 3
          },
          {
            "año": 2017,
            "premiacion": "IGN Awards",
            "categoria": "TV Series of the Year",
            "nominado": "Rick and Morty",
            "resultado": "Nom",
            "referencia": 13,
            "temporada": 3
          },
          {
            "año": 2017,
            "premiacion": "IGN Awards",
            "categoria": "Best TV Episode",
            "nominado": "The Ricklantis Mixup",
            "resultado": "Nom",
            "referencia": 14,
            "temporada": 3
          },
          {
            "año": 2017,
            "premiacion": "IGN Awards",
            "categoria": "Best Animated Series",
            "nominado": "Rick and Morty",
            "resultado": "Ganador",
            "referencia": 15,
            "temporada": 3
          },
          {
            "año": 2017,
            "premiacion": "IGN Awards",
            "categoria": "Best Comedy Series",
            "nominado": "Rick and Morty",
            "resultado": "Nom",
            "referencia": 16,
            "temporada": 3
          },
          {
            "año": 2017,
            "premiacion": "IGN Awards",
            "categoria": "Best Comedic TV Performance",
            "nominado": "Justin Roiland",
            "resultado": "Ganador",
            "referencia": 17,
            "temporada": 3
          },
          {
            "año": 2017,
            "premiacion": "IGN People's Choice Award",
            "categoria": "TV Series of the Year",
            "nominado": "Rick and Morty",
            "resultado": "Ganador",
            "referencia": 13,
            "temporada": 3
          },
          {
            "año": 2017,
            "premiacion": "IGN People's Choice Award",
            "categoria": "Best TV Episode",
            "nominado": "The Ricklantis Mixup",
            "resultado": "Nom",
            "referencia": 14,
            "temporada": 3
          },
          {
            "año": 2017,
            "premiacion": "IGN People's Choice Award",
            "categoria": "Best Animated Series",
            "nominado": "Rick and Morty",
            "resultado": "Ganador",
            "referencia": 15,
            "temporada": 3
          },
          {
            "año": 2017,
            "premiacion": "IGN People's Choice Award",
            "categoria": "Best Comedic TV Performance",
            "nominado": "Justin Roiland",
            "resultado": "Ganador",
            "referencia": 17,
            "temporada": 3
          },
          {
            "año": 2018,
            "premiacion": "Critics' Choice Television Awards",
            "categoria": "Best Animated Series",
            "nominado": "Rick and Morty",
            "resultado": "Ganador",
            "referencia": 18,
            "temporada": 3
          },
          {
            "año": 2018,
            "premiacion": "Annie Awards",
            "categoria": "Best General Audience Animated Television/Broadcast Production",
            "nominado": "Pickle Rick",
            "resultado": "Ganador",
            "referencia": 19,
            "temporada": 3
          },
          {
            "año": 2018,
            "premiacion": "Annie Awards",
            "categoria": "Outstanding Achievement for Writing in an Animated Television/Broadcast Production",
            "nominado": "Ryan Ridley, Dan Guterman (for \"The Ricklantis Mixup\")",
            "resultado": "Ganador",
            "referencia": 19,
            "temporada": 3
          },
          {
            "año": 2018,
            "premiacion": "Golden Reel Awards",
            "categoria": "Outstanding Achievement in Sound Editing - Animation Short Form",
            "nominado": "Hunter Curra, Kailand Reily, Andrew Twite, Joy Elett, Jeff Halbert, Konrad Pinon (por \"Pickle Rick\")",
            "resultado": "Nom",
            "referencia": 20,
            "temporada": 3
          },
          {
            "año": 2018,
            "premiacion": "Saturn Awards",
            "categoria": "Best Animated Series or Film on Television",
            "nominado": "Rick and Morty",
            "resultado": "Pendiente",
            "referencia": 21,
            "temporada": 3
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


