const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const authroute = require('./routes/authRoutes')
const getsub = require('./routes/getSubject')
const getbal = require('./routes/getbal')
const getuser = require('./routes/getUser')
const transfer = require('./routes/transfer1')
const joinsub = require('./routes/joinSubject')
const createcode = require('./routes/createCheckin')
const reqAuth = require('./middlewares/reqAuth');
const getid = require('./routes/getId');
const joinch = require('./routes/joinCheckin');
const deletech = require('./routes/deleteCheckin');
const getrole = require('./routes/getRole');
const getsubteacher = require('./routes/getSubjectByTeacher');
const showsub = require('./routes/showCheckin');
const userModel = require('./model/userModel');


// app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(authroute);
app.use(getsub);
app.use(getbal);
app.use(getuser);
app.use(transfer);
app.use(joinsub);
app.use(getid);
app.use(createcode);
app.use(joinch);
app.use(deletech);
app.use(getrole);
app.use(getsubteacher);
app.use(showsub);



require("./db/database");
require("./model/userModel")
require("./model/subjectModel")

app.get('/',reqAuth,(req,res) => {
    res.send(`${req.user.firstname}`);
})

app.use("*", (req, res) => res.status(404).send("404 Not found"));
app.listen(8000, () => console.log("Server is running 8000"));
