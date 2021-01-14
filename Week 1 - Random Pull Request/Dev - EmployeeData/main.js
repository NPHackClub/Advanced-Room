const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");
var port = 4000


dotenv.config({ path: './.env' });


const app = express();

//creates connection to database
const db = mysql.createConnection({
  //information is found in .env file
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  socketPath: process.env.DATABASE_SOCKET,
});


const publicDirectory = path.join(__dirname,"./public");
app.use(express.static(publicDirectory));

//Parse URL-encoded bodies (as sent by HTML form)
app.use(express.urlencoded({ extended: false}));
//Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.set("view engine", "hbs");

//connects to database
db.connect( (error)=> {
  if(error){
    console.log(error);
  }
  else{
    console.log("MYSQL Connected...");
  }
})

//Define Routes
app.use('/', require('./routes/pages'))
app.use('/auth', require('./routes/auth'))

app.listen(port, ()=>{
  console.log("Server started on port" + port)
})
