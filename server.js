const express = require("express");

const loanRouter = require("./router/loanRouter");
const { connectDb } = require("./dbManager/mongoDb");
const { productRouter } = require("./router/productRouter");


//connecting to mongodb
connectDb();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.get("/", (req, res) => {
  res.send("Hello NODE API");
});


app.use("/loan", loanRouter.loanRouter);

app.use("/products", productRouter);

app.get("/blog", (req, res) => {
  res.send("Hello Blog My name is Ehi");
});

app.listen(port, () => {
  console.log("Node API app is running on port 3000");
});
