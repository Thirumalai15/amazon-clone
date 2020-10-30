const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HZeK3IfGN9HbHbkqEFiQjvnI5ipTQragkQZiPEUVABUCCucY92AkK6DINharLZovVBI2iG5oP5FR1KBkv4IVL9X00endxWXo4"
);

//Api

//app config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//Api routes
app.get("/", (request, response) =>
  response.status(200).send("hello world")
);

app.get("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment recived  >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);
