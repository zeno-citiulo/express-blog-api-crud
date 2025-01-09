
const express = require("express");
const app = express();
const PORT = 3000;



app.use(express.json());


const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);


app.get("/", (req, res) => {
  res.send("Benvenuto!");
});


app.get("/", (req, res) => {
  res.send("Benvenuto nel nostro Blog API!");
});


app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Endpoint non trovato" });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.status || 500;
  const message = err.message || "Errore interno del server";
  res.status(statusCode).json({ error: message });
});