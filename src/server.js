
const express = require("express");
const app = express();
const PORT = 3000;



app.use(express.json());


const postsRouter = require("./routes/posts");


app.use("/posts", postsRouter);


app.get("/", (req, res) => {
  res.send("Benvenuto nel nostro Blog API!");
});


app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
