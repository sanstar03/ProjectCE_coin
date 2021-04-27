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
const createActivity = require('./routes/createActivity');
const getAct = require('./routes/getActivity');
const delAct = require('./routes/deleteActivity');
const createRe = require('./routes/createReward');
const showRe = require('./routes/showReward');
const redeemRe = require('./routes/redeemReward');
const createSp = require('./routes/createSpecial');
const joinSp = require("./routes/joinSpecial");
const createSpAct = require("./routes/createSpActivity");
const showSpAct = require("./routes/showSpAct");
const getSpDetail = require("./routes/getSpByName")
const showRewardbyid = require("./routes/showRewardById")
const getBlock = require("./routes/watchBlock")
const userModel = require('./model/userModel');


// app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
// app.set("view engine", "ejs")


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
app.use(createActivity);
app.use(showsub);
app.use(getAct);
app.use(delAct);
app.use(createRe);
app.use(showRe);
app.use(redeemRe);
app.use(createSp);
app.use(joinSp);
app.use(createSpAct);
app.use(showSpAct);
app.use(getSpDetail); 
app.use(showRewardbyid);
app.use(getBlock);

require("./db/database");
require("./model/userModel")
require("./model/subjectModel")

app.get('/',reqAuth,(req,res) => {
    res.send("Hello world");
})

app.use("*", (req, res) => res.status(404).send("404 Not found"));
app.listen(8000, () => console.log("Server is running 8000"));
