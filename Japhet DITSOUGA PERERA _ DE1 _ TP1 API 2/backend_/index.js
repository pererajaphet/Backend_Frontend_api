const express = require("express");
const bodyParser = require('body-parser'); 
const app = express();

const cors = require("cors");

app.use(cors(

    {

        "origin":'*'



    }

)
);


const db = require("./models");

const carRoutes = require("./routes/car.routes");



db.mongoose.connect(db.url, {}).then( () => {

    console.log("connected to the database");

}).catch( (err) => {

    console.log("error in the connection", err);

});




app.use(express.json());



carRoutes(app);



app.listen(8085, () => {

    console.log("server is running on port 8085");

});
