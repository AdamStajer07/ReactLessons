import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user'
})

app.use(express.json())
app.use(cors())

app.get('/users', (req, res) => {
    const q = 'SELECT * FROM user'
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/users', (req, res) => {
    const q = 'INSERT INTO user (`name`, `surname`, `mail`, `password`) VALUES (?)'
    const values = [req.body.name, req.body.surname, req.body.mail, req.body.password]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json('Book has been created succesfully');
    })
})

app.listen(8800, () => {
    console.log('Connected to backend')
})