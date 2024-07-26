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

app.post('/signIn', (req, res) => {
    const q = 'INSERT INTO user (`name`, `surname`, `mail`, `password`) VALUES (?)'
    const values = [req.body.name, req.body.surname, req.body.mail, req.body.password]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json('Book has been created succesfully');
    })
})

app.post('/login', (req, res) => {
    const mail = req.body.mail
    const password = req.body.password

    const q = `SELECT * FROM user WHERE mail="${mail}" AND password="${password}"`
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        if(data.length !== 1) {
            return res.json({status: 'fail'})
        }
        else {
            const {id, name, surname, mail, password} = data[0]
            return res.json({status: 'success', id: id, name: name, surname: surname, mail: mail, password: password})
        } 
    })
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    const q = `DELETE FROM user WHERE id = ${id}`
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json('Delete from db')
    })
})

app.put('/update/:id', (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const surname = req.body.surname
    const mail = req.body.mail
    const password = req.body.password

    const q = `UPDATE user SET name="${name}", surname="${surname}", mail="${mail}", password="${password}" WHERE id=${id}`
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json('Update success')
    })
})

app.listen(8800, () => {
    console.log('Connected to backend')
})