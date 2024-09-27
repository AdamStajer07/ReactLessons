import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "notebook"
})

app.use(express.json())
app.use(cors())

app.get('/signIn', (req, res) => {
    const q = `SELECT COUNT(user_id) FROM users WHERE email='${req.body.email}' AND password='${req.body.password}'`
    db.query(q, (err, data) => {
        if (err) {
            console.log(err)
            return res.json(err)
        }
        if (data == 1) return true
        else return false
    })
})

app.post('/signUp', (req, res) => {
    const q = `INSERT INTO users VALUES(NULL, '${req.body.email}', '${req.body.password}')`
    db.query(q, (err, data) => {
        if (err) {
            console.log(err)
            return res.json(err)
        }
        else return res.json('Success')
    })
})

app.get('/', (req, res) => {
    const q = "SELECT * FROM users";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err)
            return res.json(err)
        }
        return res.json(data)
    })
})

app.listen(8800, () => {
    console.log('Connected to backend')
})