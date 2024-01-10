import express from "express";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Hello, this is nodejs in a docker container ;)"
    })
});

app.listen(PORT, () => {
  console.log(`connection successful on PORT: ${PORT}`);
});
