const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message);
});

app.post("/payment-service", async (req, res) => {
  const { cart } = req.body;

  //Assuming we are getting the cookie and decrypt the user id.
  const userId = "123";

  console.log("Payment route");
  //TODO: Payment

  //Kafka

  return res.status(200).send("Payment successfull!");
});

app.listen(8000, () => {
  console.log("server listening port no: 8000");
});
