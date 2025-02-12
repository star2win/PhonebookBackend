const express = require('express')
const app = express()

app.use(express.json())

let phonebook =
    [
        { 
          "id": "1",
          "name": "Arto Hellas", 
          "number": "040-123456"
        },
        { 
          "id": "2",
          "name": "Ada Lovelace", 
          "number": "39-44-5323523"
        },
        { 
          "id": "3",
          "name": "Dan Abramov", 
          "number": "12-43-234345"
        },
        { 
          "id": "4",
          "name": "Mary Poppendieck", 
          "number": "39-23-6423122"
        }
    ]

app.get('/api/persons', (request, response) => {
    response.json(phonebook)
    })

app.get('/info', (request, response) => {
    
    const now = new Date()

    // Change timezone to Europe/Helsinki
    const eetTimeHelsinki = now.toLocaleString('en-US', {
    timeZone: 'Europe/Helsinki',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'long',
    hour12: false,
    })
    
    infoResponse = `Phonebook has info for ${phonebook.length} people 
        <br/><br/>${eetTimeHelsinki}`
    response.send(infoResponse)
    })

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    })

