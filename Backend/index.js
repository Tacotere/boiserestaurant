//server.js

const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(3001, () => {
  console.log(`Running on port 3001`);
});

//database.js

const database = mysql.createPool({
  host: "34.135.102.167",
  user: "root",
  password: "Lolcat12!",
  database: "restaurant_db",
});

//controller.js

app.get("/getall", (req, res) => {
  const sqlGet =
    "SELECT id, name, genre, price, delete_status FROM restaurant_db.restaurant_datastorage";

  database.query(sqlGet, (err, result) => {
    if (!err) {
      res.send(result);
      console.log(result);
    } else {
      console.log(err.message);
      res.status(400).send("Nothing to show");
    }
  });
});

app.get("/getone", (req, res) => {
  const sqlGetOne = "SELECT * FROM restaurant_db.restaurant_datastorage";

  database.query(sqlGetOne, (err, result) => {
    if (!err) {
      res.send(result);
      console.log(result);
    } else {
      console.log(err.message);
      res.status(400).send("Nothing to show");
    }
  });
});

app.post("/insert", (req, res) => {
  const name = req.body.name;
  const genre = req.body.genre;
  const price = req.body.price;

  const sqlInsert =
    "INSERT INTO restaurant_db.restaurant_datastorage (name, genre, price) VALUES (?, ?, ?)";
  database.query(sqlInsert, [name, genre, price], (err, result) => {
    if (!err) {
      res.send("Backend is working");
      console.log(result);
    } else {
      console.log(err.message);
      res.status(400).send("Something went wrong ");
    }
  });
});

app.put("/logicDelete/:id", (req, res) => {
  const id = req.params.id;
  const sqlDelete =
    "UPDATE restaurant_db.restaurant_datastorage SET delete_status = 2 WHERE id = ?";
  database.query(sqlDelete, id, (err, result) => {
    if (!err) {
      res.send("Backend is working");
      console.log(result);
    } else {
      console.log(err.message);
      res.status(400).send("Something went wrong");
    }
  });
});

app.put("/edit/:id", (req, res) => {
  const id = req.params.id;
  let name = req.body.name;
  let genre = req.body.genre;
  let website = req.body.website;
  let phone = req.body.phone;
  let address = req.body.address;
  let fav_orders = req.body.fav_orders;

  console.log(id);
  console.log(name);
  console.log(genre);

  const sqlEdit =
    "UPDATE restaurant_db.restaurant_datastorage SET name = ?, genre = ?, website = ?, phone = ?, address = ?, fav_orders = ? WHERE id = ?";
  database.query(
    sqlEdit,
    [name, genre, website, phone, address, fav_orders, id],

    (err, result) => {
      if (!err) {
        res.send("Backend is working - hell yeah.");
        console.log(result);
      } else {
        console.log(err.message);
        res.status(400).send("Something went wrong");
      }
    }
  );
});
