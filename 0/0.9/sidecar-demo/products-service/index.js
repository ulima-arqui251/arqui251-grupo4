import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: "Tennis Racket" },
    { id: 2, name: "Shoes" }
  ]);
});

app.listen(5002, () => {
  console.log("Products service on port 5002");
});
