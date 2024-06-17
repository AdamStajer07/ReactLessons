import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "098POIlkj_",
    database: "test",
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.json('dziala')
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err)
            return res.json(err)
        }
        return res.json(data)
    })
});

app.post('/books', (req, res) => {
    const q = 'INSERT INTO books (`title`, `desc`, `cover`, `price`) VALUES (?)'
    const values = [req.body.title, req.body.desc, req.body.cover, req.body.price]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json('Book has been created succesfully');
    })
})

app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id
    const q = 'DELETE FROM books WHERE id = ?'

    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json('Book has been deleted succesfully');
    })
})

app.put('/books/:id', (req, res) => {
    const bookId = req.params.id
    const values = [req.body.title, req.body.desc, req.body.cover, req.body.price]

    const q = 'UPDATE books SET `title`= ?, `desc` = ?, `cover` = ?, `price` = ? WHERE id = ?'

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json('Book has been updated succesfully');
    })
})


app.listen(8800, () => {
    console.log('Connected to backend')
})