require("dotenv").config();
const _ = require('lodash');
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const Regiter = require("./models/register");
const deptEntry = require("./models/deptModel");
const docEntry = require("./models/docModel");
const patientEntry = require("./models/patiModel");
const Adminroute = require('./routes/User')
const Registroute = require("./routes/register");
const Patroute = require("./routes/patient");
const Docroute = require("./routes/doctor");
const DeptRoute = require("./routes/Dept");
const session = require('express-session');
const passport = require("passport");

const jwt = require('jsonwebtoken')

const cors = require("cors");
const app = express();
app.use(cors({origin:'*'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());

app.use(cors({origin: '*'}))
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(passport.initialize());
app.use(passport.session());
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/doctorDetails')
// mongoose.connect("mongodb+srv://doctor:doctor123@cluster0.zd8yt.mongodb.net/?retryWrites=true&w=majority")

.catch(err => console.log(err));
mongoose.createConnection(process.env.DB_CONN)
mongoose.createConnection(process.env.DB_DEP)
mongoose.createConnection(process.env.DB_PAT)
mongoose.createConnection(process.env.DB_Admin)


app.use('/re', Registroute);
app.use('/Pat',Patroute);
app.use('/Doc',Docroute)
app.use('/reacherDept',DeptRoute)
app.use('/admin',Adminroute)


Port= 4000;
app.listen(Port, function(){
    console.log("Server is running on port  "+Port);
});
