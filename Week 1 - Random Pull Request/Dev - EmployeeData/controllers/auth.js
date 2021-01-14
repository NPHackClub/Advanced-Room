const mysql = require("mysql");
const express = require("express");


const app = express();

//creates connection to mysql database
const db = mysql.createConnection({
  //all information found in .env file
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  socketPath: process.env.DATABASE_SOCKET,
});

//this is called when a GET for /viewdata is sent
exports.viewData = (req, res) =>{

//gets all data from data base
db.query('SELECT * FROM Employees', (error, results)=>{
    if(error){
      console.log("Query error:");
      console.log(error);
    }
    else{
      //responds with viewdata.hbs page and send the results with it
      res.render('viewData', {data: results});
    }
  })
}






//this is called in a POST from add data is sent
exports.addData = (req, res)=>{

  console.log(req.body); //dumps form body into console
  const {name, age, email} = req.body; //gets values from form

  //inserts form data into data base
  db.query('INSERT INTO Employees SET ?', {name: name, age: age, email: email}, (error, results)=>{
    if(error){
      console.log("Query error:");
      console.log(error);
    }
    else{
      console.log("Querry results:");
      console.log(results);
      return res.render('addData',{
        message: 'Employee registered'
      })
    }

  });
}






exports.details = (req, res) =>{

  let id = req.query.id

  db.query('SELECT * FROM Employees WHERE id = ?',[id],(error, results)=>{
    if(error){
      console.log("Query error:");
      console.log(error);
    }
    else{
      console.log("Querry results:");
      console.log(results);
      res.render('details', {data: results})
    }
  })

}
