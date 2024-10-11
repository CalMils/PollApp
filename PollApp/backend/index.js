const express = require("express")
const cors = require("cors")
const lowDb = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")
const bodyParser = require("body-parser")

const adapter = new FileSync('db.json');
const db = lowDb(adapter);

db.defaults({ polls: [] }).write()

const app = express()

app.use(cors())
app.use(bodyParser.json())

const PORT = 4000;

app.get('/polls', (req, res) => {
  const polls = db.get("polls").value()
  return res.json(polls)
})

app.get('/votes', (req, res) => {
    const votes = db.get("votes").value()
    return res.json(votes)
  })

app.put('/savePoll', (req, res) => {
    var poll = req.body
    db.get('polls').find({title: poll.title}).assign({options: poll.options}).write()
})

app.post('/createVote', (req, res) => {
    var vote = req.body
    vote.voteTime = new Date()
    db.get('votes').push(vote).write()
})

app.post('/createPoll', (req, res) => {
    var poll = req.body
    db.get('polls').push(poll).write()
})

app.listen(PORT, ()=> {
  console.log(`Backend is running on http://localhost:${PORT}`)
})