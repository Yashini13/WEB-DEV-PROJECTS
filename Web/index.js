const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv"); // Corrected typo
const chatRoutes = require("./routes/chatRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config();

app.use("/",chatRoutes);


const port =  3000; // Corrected uppercase PORT  {process.env.PORT ||}


app.listen(port, () => {
    console.log(`Running on port : ${port}`);
});
